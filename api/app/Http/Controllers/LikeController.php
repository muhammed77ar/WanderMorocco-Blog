<?php

namespace App\Http\Controllers;

use App\Models\Like;
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
        $user = auth()->user();
        $like = $user->likes()->where('post_id', $postId)->first();

        if ($like) {
            $like->delete();
            return response()->json(['message' => 'Like removed']);
        } else {
            $user->likes()->create(['post_id' => $postId]);
            return response()->json(['message' => 'Post liked']);
        }
    }
}
