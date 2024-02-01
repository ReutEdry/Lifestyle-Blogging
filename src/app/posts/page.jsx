import { getPosts } from "@/services/posts.service"

const Posts = async () => {

    const posts = await getPosts()
    console.log(posts);
    return (
        <div>posts</div>
        // <div>{posts}</div>
    )
}

export default Posts