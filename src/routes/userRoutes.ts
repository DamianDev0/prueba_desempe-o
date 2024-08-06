import { Router } from "express";
import UserController from "../controllers/userController";
import { authenticateJWT } from "../middlewares/authMIddleware";


export const userRouter = Router()

userRouter.get('/', authenticateJWT,UserController.getAllUser)
userRouter.get('/:id', authenticateJWT,UserController.getUserById)
userRouter.post('/', UserController.createUser)
userRouter.put('/:id', authenticateJWT,UserController.updateUser)
userRouter.delete('/:id',authenticateJWT, UserController.deleteUser)
userRouter.post('/login', UserController.login)