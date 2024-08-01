import { Request, Response, Router } from "express";
import { makeCreateProductController } from "../factory/create-product-controller";
import { makeUpdateProductController } from "../factory/update-product-controller";
import { makeReturnProductController } from "../factory/return-product-controller";

const router = Router();

router.post('/products', async (req: Request, res: Response) => {

    const { id, type, mark, price } = req.body;

    const controller = makeCreateProductController();

    const controllerResponse = await controller.execute({
        id,
        type,
        mark,
        price
    })
    res.status(controllerResponse.statusCode).json(controllerResponse.body)
})

router.get('/products', async(req: Request, res: Response) => {
   
   const {type} = req.query

   const controller = makeReturnProductController();

   const controlleResponse = await controller.execute(type as string);

   res.status(controlleResponse.statusCode).json(controlleResponse.body)
})


router.patch('/products', async(req: Request, res: Response) => {
    
    const {id, price} = req.body

    const controller = makeUpdateProductController();
 
    const controlleResponse = await controller.execute({
        id,
        price
    });
 
    res.status(controlleResponse.statusCode).json(controlleResponse.body)
 })

export default router;