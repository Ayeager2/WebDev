import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from './routes/auth.js'
import commentRoute from './routes/comment.js'
import userRoute from './routes/users.js'
import videoRoute from './routes/video.js'

const app = express();
dotenv.config();

const connect = () => {
    mongoose.connect(process.env.MONGO).then(()=> {
        console.log('Conneceted to DB')
    }).catch(err => {
        throw err;
    })
}

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/video",videoRoute);
app.use("/api/comment",commentRoute);

app.listen(8800, () => {
    connect();
    console.log("Api Ready")
})