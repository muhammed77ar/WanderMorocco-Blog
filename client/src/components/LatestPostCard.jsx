import { FaRegHeart, FaHeart, FaRegComment } from "react-icons/fa";
import { useEffect, useState } from "react";
import axiosClient from "../axios/axios";
import Modal2 from "./Modal2";
import Slider from "./PostSlider/Slider";
import CommentSection from "./CommentSection";

export default function LatestPostCard({ post }) {
    const [open, setOpen] = useState(false);
    const [isLiked, setIsLiked] = useState(post.is_liked_by_user);
    const [likesCount, setLikesCount] = useState(post.likes_count);
    const [isExpanded, setIsExpanded] = useState(false); // State for showing full text

    // Ensure the component's like status and count are updated if the post data changes
    useEffect(() => {
        setIsLiked(post.is_liked_by_user);  // Re-initialize 'isLiked' after post reload
        setLikesCount(post.likes_count);
    }, [post]);

    // Function to handle like/unlike post
    const handleLike = async () => {
        try {
            const response = await axiosClient.post(`/api/posts/${post.id}/likes`);
            console.log("Like response: ", response.data);
            // Update the like status and the likes count based on API response
            setIsLiked(response.data.is_liked_by_user);
            setLikesCount(response.data.likes_count);
        } catch (error) {
            console.error("Failed to like/unlike the post", error);
        }
    };

    useEffect(() => {
        // Disable scrolling when modal is open
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    // Format date for user join date
    function formatJoinDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "short" });
        const year = date.getFullYear();
        return `Joined ${day} ${month} ${year}`;
    }

    // Calculate time ago for post creation
    function timeAgo(dateString) {
        const now = new Date();
        const postDate = new Date(dateString);
        const diffInSeconds = Math.floor((now - postDate) / 1000);

        if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
        return `${Math.floor(diffInSeconds / 86400)}d ago`;
    }

    const MAX_CONTENT_LENGTH = 100; // Max length of visible content

    const displayedContent = isExpanded ? post?.content : `${post?.content.slice(0, MAX_CONTENT_LENGTH)}${post?.content.length > MAX_CONTENT_LENGTH ? '...' : ''}`;

    return (
        <div className="flex justify-center px-6 py-6 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg w-[90%] md:w-[30%] h-auto">
            <div className="flex flex-col w-full">
                <div className="flex w-full items-center justify-between">
                    <div className="flex">
                        <img
                            className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                            src={import.meta.env.VITE_API_BASE_URL + post?.user?.profile}
                            alt="avatar"
                        />
                        <div className="flex flex-col">
                            <h2 className="text-lg font-semibold text-gray-900 -mt-1">{post?.user?.name}</h2>
                            <p className="text-gray-700">{formatJoinDate(post?.user?.created_at)}</p>
                        </div>
                    </div>
                    <small className="text-sm text-gray-700">{timeAgo(post?.created_at)}</small>
                </div>

                <div className="w-full flex flex-col">
                    <div className="flex justify-between items-center">
                        <p className="my-6 text-gray-700 text-sm w-full break-words overflow-hidden">
                            {displayedContent}{post?.content.length > MAX_CONTENT_LENGTH && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-blue-500 text-xs hover:underline ml-4"
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </button>
                        )}
                        </p>
                    </div>
                    <Slider images={post?.images} />
                </div>

                <div className="mt-4 flex items-center">
                    <div
                        onClick={handleLike}
                        className={`flex cursor-pointer items-center justify-center gap-1 text-gray-700 text-sm mr-3 ${isLiked ? 'text-red-500' : ''}`}>
                        {isLiked ? <FaHeart className="text-xl" /> : <FaRegHeart className="text-xl" />}
                        <span className="text-lg">{likesCount}</span>
                    </div>

                    <div onClick={() => setOpen(true)} className="flex cursor-pointer items-center justify-center gap-1 text-gray-700 text-sm">
                        <FaRegComment className="text-xl" />
                        <span className="text-lg">{post?.comments?.length}</span>
                    </div>

                    <Modal2 open={open} onClose={() => setOpen(false)}>
                        <div className="h-[75vh] overflow-y-scroll">
                            <CommentSection comments={post?.comments} postId={post?.id} />
                        </div>
                    </Modal2>
                </div>
            </div>
        </div>
    );
}