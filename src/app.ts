import express,{Application} from "express";
const app: Application = express();
import croutes from './routes/teacher.route'
import sroutes from './routes/student.route'
import troutes from './routes/classroom.route'
import proutes from './routes/profile.route'


app.use(express.json())


app.use('/teachers', troutes)
app.use('/students', sroutes)
app.use('/classrooms', croutes)
app.use('/profiles', proutes)





let port: number = 3000;
app.listen(port, ()=>{
    console.log('server is listening')
})