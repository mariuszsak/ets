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

router.post('/issue/addissue', async (req: express.Request, res) => {
        const {registeredAt, authorId, solvedAt} = req.body.data;
        console.log(req.body);
        try {
            const tick = await prisma.ticket.create({
                data: {
                    registeredAt: new Date(registeredAt),
                    authorId: authorId,
                    solvedAt: new Date(solvedAt)
                }
            });
            res
                .status(200)
                .send(JSON.stringify(tick))
        } catch (err) {
            res
                .status(400)
                .send(JSON.stringify(err))
                .end();
            console.log(err)
        }
    }
);

export default router;
