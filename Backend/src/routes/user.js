import express from 'express'
import Users from '../models/Users'
import sequelize from '../sequelize/sequelize'

const router = express.Router()

router.get('/', async(req, res, next) => {
    console.log("/user")
    res.sendStatus(200)
})

router.post('/create', async(req, res, next) => {
    const userData = req.body

    try {
        const createUserTransaction = await sequelize.transaction(async (transaction) => {
            const createdUser = await Users.create(
                {email: userData.email, name: userData.name, password: userData.password},
                {transaction: transaction})
            return createdUser
        })

        res.json(createUserTransaction)

    } catch (error) {
        console.log(error)
        res.json({message: error, code: "401", okay: "false"})

    }
})

export default router