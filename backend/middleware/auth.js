const jwt = require('jsonwebtoken');
const jwtSecret = "rahul1234567890"

const authenticateUser = async (req, res, next) => {
    // Extract the authorization header
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({ error: 'Unauthorized. Please provide a valid token.' });
    }
    
    const token = authHeader.split(' ')[1];
    // console.log(token)
    jwt.verify(token, jwtSecret, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token.' });
        }

        req.user = user;

        next();
    })
};
module.exports=authenticateUser