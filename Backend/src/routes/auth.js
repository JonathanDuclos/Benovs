import express from 'express'
import Users from '../models/Users'
import sequelize from '../sequelize/sequelize'

const router = express.Router()

router.get('/', async(req, res, next) => {
    console.log("/")
    res.sendStatus(200)
})

router.post('/login', async(req, res, next) => {
    const loginData = req.body

    try {
        const loginTransaction = await sequelize.transaction(async (transaction) => {
            const loggedUser = await Users.findAll({
                where: { email: loginData.email, password: loginData.password },
                attributes: { exclude: ['password'] },
                transaction: transaction
            })
            return loggedUser
        })

        /**Return empty array means it hasn't user with this credentials (loginData) */
        res.json(loginTransaction)

    } catch (error) {
        console.log(error)
        res.json({message: "", code: "401", okay: "false"})

    }
})

export default router