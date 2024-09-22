<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index($postId)
    {
        $comments = Comment::with('user')
            ->where('post_id', $postId)
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json(['comments' => $comments]);
    }

    public function store(Request $request, $postId)
    {
        $request->validate([
            'content' => 'required|string',
        ]);

        $comment = Comment::create([
            'post_id' => $postId,
            'user_id' => auth()->id(),
            'content' => $request->input('content'),
        ]);

        return response()->json(['message' => 'Comment added successfully', 'commment' => $comment]);
    }
}
