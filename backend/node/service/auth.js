require("dotenv").config();
const jwt = require('jsonwebtoken');

function setUser(user) {
    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    });
    return token;
}

function getUser(token) {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    } catch (error) {
        return null;
    }
}

module.exports = { setUser, getUser };