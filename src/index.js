import Express from "express"
import Routes from './routes/index'
import bodyParser from 'body-parser'
const app = Express();

app.use(bodyParser.json());
app.use("/",Routes);
app.listen(5000, ()=>{ 
    console.log("App started");
});
export default app;