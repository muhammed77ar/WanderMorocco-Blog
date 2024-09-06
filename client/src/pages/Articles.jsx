import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../redux/slices/postSlice";
import PostCard from "../components/PostCard";


export default function Articles() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  console.log(posts)

  if (loading) {
    return <>
        <div className="flex-col gap-4 w-full h-screen flex items-center justify-center">
            <div
                className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
            >
                <div
                    className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
                ></div>
            </div>
        </div>
    </>;
}
  return (
    // <div className="block md:flex md:gap-3 bg-gray-100">
    //   <aside className="w-auto mx-4 h-fit mt-[70px] hidden md:block px-4 py-8 border border-1 border-gray-400 rounded-2xl">
    //     <h2 className=" font-extrabold text-lg">Top 10 active users🔥</h2>
    //   </aside>
    // <div className=" flex flex-col justify-center items-center w-full md:w-[70%] my-[100px] gap-10 md:mr-3">
    //   {posts.map(post => (
    //     <PostCard key={post?.id} post={post} />
    //   ))}
    // </div>
    // </div>
    <div className=" flex flex-col justify-center items-center w-full my-[100px] gap-10 md:mr-3">
      {posts.map(post => (
        <PostCard key={post?.id} post={post} />
      ))}
    </div>
  )
}
