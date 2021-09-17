import {PrismaClient} from "@prisma/client";
import express from 'express';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const router = express.Router();

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


export default router;
