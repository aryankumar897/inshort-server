import express from  'express';
import {getNews} from '../controller/newscontroller.js';




const route=express.Router();
route.get('/news' ,getNews);


export default  route;