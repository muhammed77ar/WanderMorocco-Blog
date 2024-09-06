<?php

use App\Http\Controllers\Auth\AuthGoogle;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// For authenticated users
Route::middleware(['auth:sanctum,admin'])->get('/user', function (Request $request) {
    $user =  $request->user();
    if ($user->role === "admin") {
        return ["user" => $user];
    }else{
        return ["user" => $user];
    };
});

Route::get('auth/google', [AuthGoogle::class, 'redirectToGoogle']);
Route::get('auth/google/callback', [AuthGoogle::class, 'handleGoogleCallback']);

Route::apiResource("users", UserController::class);
Route::middleware('auth:sanctum')->post('/posts', [PostController::class, 'store']);
Route::get('/posts', [PostController::class, 'index']);