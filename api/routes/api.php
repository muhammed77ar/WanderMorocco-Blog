<?php

use App\Http\Controllers\Auth\AuthGoogle;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
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
        // Load the user's posts and append the 'likes_count' for each post
        $userWithRelations = $user->load([
            'posts' => function ($query) {
                $query->with([
                    'comments.user', // Load the user who wrote each comment on the post
                    'likes.user'     // Load the user who liked the post
                ])->withCount('likes'); // Append the likes count for each post
            },
            'comments.post' // Load the posts for comments authored by the user
        ]);

        // Return user with appended counts and loaded relationships
        return ["user" => $userWithRelations];
    };
});

Route::get('auth/google', [AuthGoogle::class, 'redirectToGoogle']);
Route::get('auth/google/callback', [AuthGoogle::class, 'handleGoogleCallback']);

Route::apiResource("users", UserController::class);
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/last-three', [PostController::class, 'getLastThreePosts']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/posts', [PostController::class, 'store']);
    Route::post('/posts/{postId}/comments', [CommentController::class, 'store']);
    Route::post('/posts/{postId}/likes', [LikeController::class, 'toggleLike']);
});

Route::get('/posts/{postId}/comments', [CommentController::class, 'index']);
Route::get('/posts/{postId}/likes', [LikeController::class, 'index']);