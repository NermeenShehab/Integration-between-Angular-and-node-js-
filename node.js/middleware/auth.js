const jwt = require("jsonwebtoken")

const Private_Key = process.env.Private_Key || "malek41"

const auth = async(req, res, next) => {
    const token = req.headers.token

    try {
        jwt.verify(token, Private_Key)
        next();
    } catch (error) {
        res.status(401).send("invalid-token")
    }
}

module.exports = auth