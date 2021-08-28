import {PrismaClient} from "@prisma/client";
import express from 'express';

const prisma = new PrismaClient();
const router = express.Router();


router.get('/users', async (req: express.Request, res) => {
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

router.get('/issues', async (req: express.Request, res) => {
        try {
            const issues = await prisma.ticket.count(
                {
                    where: {
                        status: 'REGISTERED'
                    }
                }
            );
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


router.get('/issue/list', async (req: express.Request, res) => {
        try {
            const tick = await prisma.ticket.findMany({
                where: {
                    OR: [
                        {
                            status: 'REGISTERED'
                        },
                        {
                            status: 'INPROGRESS'
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

router.post('/issue/addissue', async (req: express.Request, res) => {
        const {registeredAt, authorId, solvedAt, issue} = req.body.data;
        console.log(req.body);
        try {
            const tick = await prisma.ticket.create({
                data: {
                    registeredAt: new Date(registeredAt),
                    authorId: authorId,
                    solvedAt: new Date(solvedAt),
                    issue: issue
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
