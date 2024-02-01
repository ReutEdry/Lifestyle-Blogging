import { Post } from "./models/post";
import { connectToDb } from "./utils";

export const getPosts = async () => {

    try {
        await connectToDb()
        console.log('after connection');
        const posts = await Post.find()
        return posts
    } catch (error) {
        console.log('Coul not load posts', error);
        throw error
    }
}