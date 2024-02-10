import express from 'express'
import cors from 'cors'
import { enableDotEnvConfigs, asyncDatabase, catchUnhandledPromiseError } from './utils/main'
import process from "process"

//Routers 
import AppRouter from './routes/app'
import UserRouter from './routes/user'
import AuthRouter from './routes/auth'

//Express app and your middlewares.
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}));

//As possible, run main.js important functions over here.
enableDotEnvConfigs()
asyncDatabase()
catchUnhandledPromiseError()
const port = process.env.PORT;

//Are you listening?
app.listen(port, () => {
    console.log(`Benovs started at port ${port}.`)
})
  
//Access to routes 
app.use('/', AppRouter)
app.use('/users', UserRouter)
app.use('/auth', AuthRouter)

export default app;