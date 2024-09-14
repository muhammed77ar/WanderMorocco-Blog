
import { useEffect, useState } from "react";
import axiosClient from "../axios/axios";
import PostCard from "./PostCard";
import LatestPostCard from "./LatestPostCard";

export default function LatestJourneysSection() {
    const [LatestPosts, setLatestPosts] = useState([])

    const FetchLatestPosts = async () => {
        try {
            const response = await axiosClient.get('/api/posts/last-three')
            if (response) {
                setLatestPosts(response?.data?.posts)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        FetchLatestPosts()
    }, []);

    console.log(LatestPosts)

    return (
        <div className=" my-16">
            <h1 className="text-4xl font-medium mx-10 mt-10">
				Latest Journeys
			</h1>
			<p className=" mx-10 text-gray-500">Explore the latest journeys</p>
			<div className="mt-2 mx-10">
				<span className="inline-block w-40 h-1 bg-[#d67940] rounded-full"></span>
				<span className="inline-block w-3 h-1 ml-1 bg-[#d67940] rounded-full"></span>
				<span className="inline-block w-1 h-1 ml-1 bg-[#d67940] rounded-full"></span>
			</div>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
                {LatestPosts.map(latestPost => (
                    <LatestPostCard key={latestPost?.id} post={latestPost} />
                ))}
            </div>
        </div>
    )
}
