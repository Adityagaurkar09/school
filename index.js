import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import getStar from './controlar/error'
import getHealth from './controlar/Health'
import {getStudent,postStudent,deletStudent,putStudent,patchStudent,getStudentRoll} from './controlar/Student'
dotenv.config();


 const app = express();
 app.use(express.json());
 app.use (cors());

 app.get("/health",getHealth)

 app.get("/students",getStudent)

 app.post("/students",postStudent)

 app.delete("/students/:rollNo",deletStudent)

 app.put("/students/:rollNo",putStudent)

 app.patch("/students/city/:rollNo",patchStudent)

 app.get("/students/:rollNo",getStudentRoll)

 app.get("*",getStar)
 const PORT = process.env.PORT;

 app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}`)
 });