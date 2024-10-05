const express = require("express");

const router = express.Router();

const userRouter = require('./user.router')
const authRouter = require('./auth.router');
const { authentication } = require("../middleware/auth.middleware");

router.get('/hello', (req, res) => {
	res.send('hello')
})

router.use('/auth', authRouter)
router.use(authentication)
router.use('/users', userRouter)

module.exports = router;