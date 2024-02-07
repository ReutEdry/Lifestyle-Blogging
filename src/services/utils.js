import mongoose from 'mongoose';

let isConnected = false;

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('Already connect')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "blog",
        })

        isConnected = true;
    } catch (error) {
        console.log(error);
    }
}

