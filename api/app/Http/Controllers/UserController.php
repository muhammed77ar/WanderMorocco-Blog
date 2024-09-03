<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:users,email,'.$user->id, 'unique:admins,email'],
            'profile' =>  ['image','mimes:jpeg,png,jpg,gif', 'max:2048'],
            'password' => ['nullable', 'confirmed', Rules\Password::defaults()],
        ]);

        if (isset($data["password"]) && !empty($data["password"])) {
            $data["password"] = bcrypt($data["password"]);
        }else {
            unset($data["password"]);
        }

        if ($request->hasFile('profile')) {
            $data['profile'] = '/storage/'.$request->file('profile')->store('/images/users', 'public');
        } else {
            $data['profile'] = $user->profile;
        }

        $user->update($data);

        return response()->json(["message" => "Account Updated successfully", "user" => $user], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
