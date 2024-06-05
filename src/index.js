// require('dotenv').config({path: './env'})

import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
















/*
import express from  "express";

const app = express()

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODV_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log(`Error: ${error}`);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        })
    }
    catch (error) {
        console.log(`Error: ${error}`)
        throw error;
    }
})()

*/
