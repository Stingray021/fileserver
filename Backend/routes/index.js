const Router = require('express')
const router = new Router()
const fileRouter = require('./fileRouter')
const JokesRouter = require('./jokesRouter')
const catRouter = require("./catRouter")
const userRouter = require('./userRouter')

router.use('/file', fileRouter)
router.use('/jokes', JokesRouter)
router.use('/cat', catRouter)
router.use('/user', userRouter);

module.exports = router

