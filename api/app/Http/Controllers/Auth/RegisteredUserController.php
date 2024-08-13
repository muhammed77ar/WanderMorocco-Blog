<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:users', 'unique:admins'],
            'profile' => ['sometimes', 'image','mimes:jpeg,png,jpg,gif', 'max:2048'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        if ($request->hasFile('profile')) {
            $request->profile = '/storage/'.$request->file("profile")->store('/images/users', "public");
        }else{
            $request['profile'] = "/storage/images/defaultImage/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg";
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'profile' => $request->profile,
            'role' => 'user',
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return response()->json(["message" => "Account created successfully", "user" => $user], 201);
    }
}
