import {PrismaClient} from '@prisma/client';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userController from "./controllers/userController";
import loginController from "./controllers/loginController";
import ticketController from "./controllers/ticketController";

export const prisma = new PrismaClient();
export const app = express();

dotenv.config();

app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.use('/', userController);
app.use('/', loginController);
app.use('/', ticketController);
