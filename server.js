//Created By Segun

const express = require ('express');
const dotenv = require ('dotenv');
const connectDB = require('./models/db');
const User = require('./models/schema');
const router = require('./routers/routerTask');
dotenv.config({path: './config/config.env'});

const app = express();

//middleware expression
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)

// expression of port
const PORT = process.env.PORT || 3000

//setting the database to connect first before listenning for request
const connectServer = async()=>{
    try {
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`Servers is listenning for request and running on port${PORT}`)
        });
    } catch (error) {
        console.error(error)
    }
}
connectServer()