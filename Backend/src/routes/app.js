import express from 'express'

const router = express.Router()

router.get('/', async(req, res, next) => {
    console.log("/")
    res.sendStatus(200)
})

export default router