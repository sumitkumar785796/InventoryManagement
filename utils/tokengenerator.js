const jwt = require("jsonwebtoken")
const { secretKey } = require("../utils")
const generateToken = (user) => {
    return jwt.sign({ user }, secretKey, { expiresIn: '10h' });
}
module.exports = generateToken