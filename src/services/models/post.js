import mongoose from "mongoose";


export const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
    },
    img: {
        type: String
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
},
    {
        timestamps: true
    }
)

export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);