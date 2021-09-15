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

router.post('/login', async (req: express.Request, res: express.Response) => {
        const {email} = req.body.data;
        try {
            const user = await prisma.user.findFirst({
                where: {
                    email: email
                }
            });
            if (!user) {
                return res
                    .status(401)
                    .send('Unauthorized');
            }

            const payload = user;
            const token = jwt.sign(payload, process.env.ACCESS_TOKEN)

            res.json({token});
        } catch (err) {
            res
                .status(400)
                .send(JSON.stringify(err))
                .end();
        }
    }
);

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
