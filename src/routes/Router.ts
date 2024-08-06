import { Router } from "express";
import {productRouter,orderRouter,productCartRouter,userRouter} from '.'


const router = Router();


router.use('/products', productRouter)
router.use('/orders', orderRouter)
router.use('/productcart', productCartRouter)
router.use('/users', userRouter)



export default router;