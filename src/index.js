import Express from "express"
import Routes from './routes/index'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config();

const app = Express();

app.use(bodyParser.json());
app.use(cors());
app.use("/",Routes);
app.listen(process.env.PORT || 5000, ()=>{ 
    console.log("App started");
});
export default app;