import {PrismaClient} from "@prisma/client";
import express from 'express';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/tickets', async (req: express.Request, res: express.Response) => {
        try {
            const issues = await prisma.ticket.findMany();
            res
                .status(200)
                .send(JSON.stringify(issues))
                .end();
        } catch (err) {
            res
                .status(400)
                .send(JSON.stringify(err))
                .end();
        }
    }
);


router.get('/tickets/current', async (req: express.Request, res: express.Response) => {
        try {
            const tick = await prisma.ticket.findMany({
                where: {
                    OR: [
                        {
                            status: 'REGISTERED'
                        },
                        {
                            status: 'PENDING'
                        }
                    ]
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

router.post('/tickets', async (req: express.Request, res: express.Response) => {
        const {userId, initialIssue} = req.body.data;
        console.log(req.body);

        try {
            const tick = await prisma.ticket.create({
                data: {
                    registeredAt: new Date(),
                    userId: userId,
                    initialIssue: initialIssue
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
