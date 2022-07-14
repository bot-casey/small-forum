import dotenv from 'dotenv'
import express from 'express';
import fs from 'fs';
import morgan from 'morgan';
import path from 'path';

dotenv.config()
const port = process.env.SERVER_PORT || 5000;

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' }
)
morgan('tiny')
morgan(':method :url :status :res[content-length] - :total-time[digits] ms')

const app = express();

app.use(morgan('combined', {
    stream: accessLogStream
}))

app.get( "/", ( req, res ) => {
    res.send("Application ready")
        .status(200)
} );

import posts from './routes/posts.js'
app.use("/posts", posts)

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );