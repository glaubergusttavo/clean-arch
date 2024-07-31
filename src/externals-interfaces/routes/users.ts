import { Request, Response, Router } from "express";
import { makeCreateUserController } from "../factory/create-user-controller";
import { makeReturnUserController } from "../factory/return-user-controller";

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

router.get('/users', async (req: Request, res: Response) =>{
    const controller = makeReturnUserController();
    
    const controllerResponse = await controller.execute();

    res.status(controllerResponse.statusCode).json(controllerResponse.body)
    
})

export default router;