<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function index($postId)
    {
        // Get likes for a specific post along with the user who liked it
        $like = Like::with('user')->where('post_id', $postId)->get();

        return response()->json(['likes' => $like]);
    }

    public function toggleLike($postId)
    {
        $user = auth()->user();  // Get the authenticated user
        $post = Post::find($postId);

        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }

        // Check if the user has already liked the post
        $like = $user->likes()->where('post_id', $postId)->first();

        if ($like) {
            // If the user already liked the post, remove the like
            $like->delete();
            $isLikedByUser = false;
        } else {
            // If the user has not liked the post yet, create a new like
            $user->likes()->create(['post_id' => $postId]);
            $isLikedByUser = true;
        }

        // Get the updated like count
        $likesCount = $post->likes->count();

        return response()->json([
            'is_liked_by_user' => $isLikedByUser,
            'likes_count' => $likesCount,
        ]);
    }
}
