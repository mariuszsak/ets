import {PrismaClient} from "@prisma/client";
import express from 'express';

const prisma = new PrismaClient();
const router = express.Router();


router.get('/countall', async (req: express.Request, res) => {
        try {
            const users = await prisma.user.count(
                {
                    where: {
                        role: 'USER'
                    }
                }
            );
            res
                .status(200)
                .send(JSON.stringify(users))
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
