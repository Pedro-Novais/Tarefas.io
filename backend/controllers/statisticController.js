const { User: UserModel } = require('../models/user')
const { Statistic: StatisticModel } = require('../models/statistic')

const statisticController = {
    get: async (req, res) => {
        try {

            const id = req.userId

            const user = await UserModel.findById(id)

            if (!user) {
                res.status(404).json({ msg: "Usúario não encontrado" })
                return
            }

            res.json(user.statistic)

        } catch (error) {
            console.log(error)
        }
    },

    update: async (req, res) => {
        try {
            const id = req.userId
            const priority = req.params.priority

            const user = await UserModel.findById(id)

            if (!user) {
                res.status(404).json({ msg: "Usúario não encontrado" })
                return
            }
    
            const newStatistic = req.body[priority]
       
            user.statistic[priority] = newStatistic

            await user.save()

            res
                .status(200)
                .json( { msg: "estatística alterada com sucesso" })

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = statisticController 