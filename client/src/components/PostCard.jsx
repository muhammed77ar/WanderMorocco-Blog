import Slider from "./PostSlider/Slider";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { useEffect, useState } from "react";
import CommentSection from "./CommentSection";
import Modal2 from "./Modal2";
import { useDispatch} from "react-redux";
import axiosClient from "../axios/axios";
export default function PostCard({ post }) {
    const [open, setOpen] = useState(false);  

    // Use useEffect to handle scroll disabling when modal is open
  useEffect(() => {
    if (open) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }

    // Cleanup when component is unmounted or open state changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
    function formatJoinDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "short" });
        const year = date.getFullYear();

        return `Joined ${day} ${month} ${year}`;
    }
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
        <div className="flex  justify-center px-6 py-6 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg w-[90%] md:w-[60%] h-auto">
            <div className="flex flex-col w-full">
                <div className="flex w-full items-center justify-between">
                    <div className="flex">
                        <img
                            className="w-12 h-12 rounded-full object-cover mr-4 shadow"
                            src={import.meta.env.VITE_API_BASE_URL + post?.user?.profile}
                            alt="avatar"
                        />
                        <div className=" flex flex-col">
                            <h2 className="text-lg font-semibold text-gray-900 -mt-1">{post?.user?.name}</h2>
                            <p className="text-gray-700">{formatJoinDate(post?.user?.created_at)}</p>
                        </div>
                    </div>
                    <small className="text-sm text-gray-700">{timeAgo(post?.created_at)}</small>
                </div>
                <div className="w-full flex flex-col">
                    <p className="my-6 text-gray-700 text-sm w-full break-words">
                        {post?.content}
                    </p>
                    <Slider images={post?.images} />
                </div>
                <div className="mt-4 flex items-center">
                    <div className="flex justify-center items-center gap-1 text-gray-700 text-sm mr-3">
                        <FaRegHeart className=" text-xl" />
                        <span className=" text-lg">{post?.likes?.length}</span>
                    </div>
                    <div onClick={() => setOpen(true)} className="flex cursor-pointer items-center justify-center gap-1 text-gray-700 text-sm">
                        <FaRegComment className=" text-xl" />
                        <span className=" text-lg">{post?.comments?.length}</span>
                    </div>
                    <Modal2 open={open} onClose={() => setOpen(false)}>
                        <div className="h-[75vh] overflow-y-scroll">
                        <CommentSection comments={post?.comments} postId={post?.id} />
                        </div>
                    </Modal2>
                </div>
            </div>
        </div>

    )
}
