<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function index($postId)
    {
        $likes = Like::where('post_id', $postId)->get();
        return response()->json(['likes' => $likes]);
    }

    public function toggleLike($postId)
    {
        $user = auth()->user();  // Get the authenticated user
        $post = Post::findOrFail($postId);  // Find the post

        if ($post->isLikedByUser($user->id)) {
            // If already liked, remove the like
            $post->likes()->where('user_id', $user->id)->delete();
            $isLikedByUser = false;
        } else {
            // Otherwise, add a like
            $post->likes()->create([
                'user_id' => $user->id,
                'is_liked_by_user' => true
            ]);
            $isLikedByUser = true;
        }

        // Fetch the updated likes count
        $likesCount = $post->likes()->count();

        // Return the updated like status and likes count
        return response()->json([
            'is_liked_by_user' => $isLikedByUser,
            'likes_count' => $likesCount,
        ]);
    }
}
