
import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import connection from './config/dbConfig.js';
import portfolioRoute from './routes/portfolio.js'
import cors from 'cors'

const app=express()
connection();
//using cors to manage cross-site requests
app.use(cors());

app.use("/api/portfolio",portfolioRoute)

app.get('/',(req,res)=>{
    res.send("server is ready");
})

const port=process.env.PORT || 3000;



app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`)
})
