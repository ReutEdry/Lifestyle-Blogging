// import mongoose from "mongoose"

// const connection = {}

// export const connectToDb = async () => {
//     try {
//         if (connection.isConnected) {
//             console.log('Already connect')
//             return
//         }

//         const db = await mongoose.connect(process.env.MONGODB, {
//             dbName: 'blog',
//             useNewUrlParser: true,
//             useUnifieldTopology: true
//         });
//         connection.isConnected = db.connections[0].readyState;
//     } catch (error) {
//         console.log('Could not connect to db', error);
//         throw error
//     }
// }

import mongoose from 'mongoose';

let isConnected = false;

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    console.log('when getting into connection');
    console.log('env:', process.env.MONGODB_URI);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "blog",
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        })

        isConnected = true;
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
}

