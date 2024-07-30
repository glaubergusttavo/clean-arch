import express, { Request, Response } from "express";
import UsersRoute from "./routes/users"

const app = express();

app.use(express.json())
app.use(UsersRoute)

app.get('/test', function(req: Request, res: Response){
    res.send('Route test created!')
})

export {app}