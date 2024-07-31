import express, { Request, Response } from "express";
import UsersRoute from "./routes/users"
import ProductsRoute from "./routes/products"

const app = express();

app.use(express.json())
app.use(UsersRoute)
app.use(ProductsRoute)

app.get('/test', function(req: Request, res: Response){
    res.send('Route test created!')
})

export {app}