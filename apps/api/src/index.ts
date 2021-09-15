import {PrismaClient} from '@prisma/client';
import express from 'express';
import cors from 'cors';
import controller from './controller';
import dotenv from 'dotenv';

export const prisma = new PrismaClient();
export const app = express();

dotenv.config();

app.use(cors({
    origin: '*'
}));
app.use(express.json());

app.use('/', controller);
