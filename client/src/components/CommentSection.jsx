import { useEffect, useRef } from "react";
import { IoMdSend } from "react-icons/io";
import axiosClient from "../axios/axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
export default function CommentSection({ postId }) {
    const [comments, setComments] = useState([])
    const user = useSelector((state) => state.auth.user)
    const conteRef = useRef()
    const submitComment = async (e) => {
        e.preventDefault();
        // const content = conteRef.current.value
        try {
            const response = await axiosClient.post(`/api/posts/${postId}/comments`, {
                content: conteRef.current.value,
            });
            document.location.reload()
        } catch (error) {
            console.error('Error posting comment', error);
        }
    };

    const FetchComments = async () => {
        try {
            const response = await axiosClient.get(`/api/posts/${postId}/comments`);
            if (response) {
                setComments(response?.data?.comments);
            }
        } catch (error) {
            console.error('Error fetching comments', error);
        }
    }

    useEffect(() => {
        FetchComments();  // Fetch comments when the component mounts
    }, [postId]);  // Re-fetch comments if the postId changes
    


    function timeAgo(dateString) {
        const now = new Date();
        const postDate = new Date(dateString);
        const diffInSeconds = Math.floor((now - postDate) / 1000);

        const secondsInMinute = 60;
        const secondsInHour = 3600;
        const secondsInDay = 86400;

        if (diffInSeconds < secondsInMinute) {
            return `${diffInSeconds}s ago`;
        } else if (diffInSeconds < secondsInHour) {
            const minutes = Math.floor(diffInSeconds / secondsInMinute);
            return `${minutes}m ago`;
        } else if (diffInSeconds < secondsInDay) {
            const hours = Math.floor(diffInSeconds / secondsInHour);
            return `${hours}h ago`;
        } else {
            const days = Math.floor(diffInSeconds / secondsInDay);
            return `${days}d ago`;
        }
    }

    


    return (
        <section className="relative">
            <div className="w-full max-w-7xl md:px-5 lg:px-5 mx-auto">
                <div className="w-full flex-col justify-start items-start lg:gap-7 gap-7 inline-flex">
                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">Comments</h2>
                    <form action="" onSubmit={submitComment} className="w-full relative flex justify-between items-center gap-2">
                        <img className="w-12 h-12 rounded-full object-cover  shadow" src={import.meta.env.VITE_API_BASE_URL + user?.profile} alt="" />
                        <input ref={conteRef} type="text"
                            className="w-full py-3 px-5 rounded-lg border border-gray-300 bg-white shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed"
                            placeholder="Leave a comment..." />
                        <button type="submit" className="absolute right-6">
                            <IoMdSend className="text-2xl text-[#d67940]" />
                        </button>
                    </form>
                    <div className="w-full flex-col justify-start items-start gap-8 flex">
                        {comments.length > 0 ?
                        <>
                        {comments.map(comment => (
                            <>
                                <div key={comment?.id}
                                    className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start flex">
                                    <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                                        <div className="w-full justify-between items-center inline-flex">
                                            <div className="justify-start items-center gap-2.5 flex">
                                                <div
                                                    className="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                                                    <img className="rounded-full object-cover w-full h-full" src={import.meta.env.VITE_API_BASE_URL + comment?.user?.profile}
                                                        alt="John smith image" />
                                                </div>
                                                <div className="flex-col justify-start items-start gap-1 inline-flex">
                                                    <h5 className="text-gray-900 text-sm font-semibold leading-snug">{comment?.user?.name}</h5>
                                                    <h6 className="text-gray-500 text-xs font-normal leading-5">{timeAgo(comment?.created_at)}</h6>
                                                </div>
                                            </div>

                                        </div>
                                        <p className="text-gray-800 text-sm font-normal leading-snug">{comment?.content}</p>
                                    </div>
                                </div>
                            </>
                        ))}</>
                         : <p className=" w-full h-full flex justify-center items-center text-xl">No comments yet.</p>}
                    </div>
                </div>
            </div>
        </section>

    )
}
