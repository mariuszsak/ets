import {PrismaClient} from "@prisma/client";
import express from 'express';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/users', async (req: express.Request, res: express.Response) => {
        const {email} = req.body.data;
        console.log(req.body.data)

        try {
            const user = await prisma.user.findFirst({
                where: {
                    email: email
                }
            });
            res
                .status(200)
                .send(JSON.stringify(user.role))
                .end();
        } catch (err) {
            res
                .status(400)
                .send(JSON.stringify(err))
                .end();
        }
    }
);


export default router;
