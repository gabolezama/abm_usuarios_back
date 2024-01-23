import express from 'express';
import { UsersService } from '../services/users.service.js';

export const userRouter = express.Router();
const service = new UsersService();

userRouter.get('/', async (req, res, next)=>{
    try {
        const users = await service.find();
        res.json(users)
    } catch (error) {
        next(error);
    }
})

userRouter.post('/', async (req, res, next)=>{
    try {
        const users = await service.create(req.body);
        res.json(users);
    } catch (error) {
        next(error);
    }
})

userRouter.put('/:id', async (req, res, next)=>{
    try {
        const users = await service.update(req.params.id, req.body);
        res.json(users);
    } catch (error) {
        next(error);
    }
})

userRouter.delete('/:id', async (req, res, next)=>{
    try {
        const users = await service.delete(req.params.id);
        res.json(users);
    } catch (error) {
        next(error);
    }
})