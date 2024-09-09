<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user(); // Get the authenticated user or null if not logged in

        $posts = Post::with(['user', 'comments.user', 'likes'])
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($post) use ($user) {
                $post->is_liked_by_user = $user ? $post->isLikedByUser($user->id) : false;
                $post->likes_count = $post->likes->count();
                return $post;
            });

        return response()->json(['posts' => $posts]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'content' => 'nullable|string',
            'images' => 'nullable|array|max:10',
            'images.*' => 'nullable|image|mimes:jpg,jpeg,png,gif|max:3048',
        ]);

        $imagePaths = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = '/storage/' . $image->store('/images/posts', 'public');
                $imagePaths[] = $path;
            }
        }

        $post = Post::create([
            'user_id' => auth()->id(),
            'content' => $request->content,
            'images' => $imagePaths,
        ]);

        return response()->json(['message' => 'Post created successfully!', "post" => $post]);
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
