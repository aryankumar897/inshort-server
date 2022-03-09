import express from "express";
import Connection from "./Conncetion/db.js";

import cors from 'cors';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';
import DefaultData  from "./default.js";
import Route from './routes/Route.js';
dotenv.config()
const app = express()



app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


app.use('/',Route)
const port = 8000


const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD; 



Connection(username,password)
DefaultData();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

