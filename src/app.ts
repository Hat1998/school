import express,{Application} from "express";
const app: Application = express();
import routes from './routes/user.route'
app.use(express.json())


app.use('/users', routes)




let port: number = 3010;
app.listen(3010, ()=>{
    console.log('server is listening')
})