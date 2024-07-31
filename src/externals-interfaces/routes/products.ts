import { Request, Response, Router } from "express";
import { makeCreateProductController } from "../factory/create-product-controller";
import { makeReturnProductController } from "../factory/return-product-controller";

const router = Router();

router.post('/products', async (req: Request, res: Response) => {

    const { type, mark, price } = req.body;

    const controller = makeCreateProductController();

    const controllerResponse = await controller.execute({
        type,
        mark,
        price
    })
    res.status(controllerResponse.statusCode).json(controllerResponse.body)
})

router.get('/products', async(req: Request, res: Response) => {
   const controller = makeReturnProductController();

   const controlleResponse = await controller.execute();

   res.status(controlleResponse.statusCode).json(controlleResponse.body)
})

export default router;