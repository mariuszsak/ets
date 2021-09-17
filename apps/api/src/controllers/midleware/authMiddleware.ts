import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]
    if (!token) {
        return res.status(401).send('unauthorized');
    }

    jwt.verify(token, process.env.ACCESS_TOKEN, (error, data) => {
        if (error) {
            res.status(403).send('Forbidden')
        }
        req.user = data;
        next();
    })
}
