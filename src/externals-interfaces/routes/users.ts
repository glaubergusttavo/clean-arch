import { Request, Response, Router } from "express";
import { makeCreateUserController } from "../factory/create-user-controller";

const router = Router()

router.post('/users', async (req: Request, res: Response) =>{
    const {name, email, password} = req.body

    const controller = makeCreateUserController();
    
    const controllerResponse = await controller.execute({
        name,
        email,
        password
    })
    res.status(controllerResponse.statusCode).json(controllerResponse.body)
    
})

export default router;