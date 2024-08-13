<?php

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
Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

// For authenticated admins
Route::middleware(['auth:sanctum:admin'])->get('/admin', function (Request $request) {
    return $request->user();
});
