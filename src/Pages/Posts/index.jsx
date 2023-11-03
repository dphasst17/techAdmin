import CreatePosts from "./createPosts"
import GetPosts from "./getPosts";
import ShortKey from "./shortCutKeys";
const Posts = () => {
    return <div className="posts-container w-full h-auto min-h-screen flex flex-wrap justify-center">
        <div className="w-[90%] my-2">
            <h1 className="text-blue-500 text-[25px] text-center font-bold my-4">Create a new Posts</h1>
            <h2 className="text-blue-500 text-[20px] font-bold my-4">Short key</h2>
            <ShortKey />
            <CreatePosts />
        </div>
        <div className="w-full h-auto flex flex-col my-10">
            <h1 className="text-blue-500 text-[25px] text-center font-bold my-4">All Posts</h1>
            <GetPosts />
        </div>
    </div>
}
export default Posts