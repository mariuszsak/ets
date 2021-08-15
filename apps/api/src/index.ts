import {PrismaClient} from '@prisma/client';
import express from 'express';
import cors from 'cors';
import controller from './controller';

export const prisma = new PrismaClient();
export const app = express();

app.use(cors({
    origin: '*'
}))

app.use('/', controller);
