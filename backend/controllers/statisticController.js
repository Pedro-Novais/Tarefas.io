const { User: UserModel } = require('../models/user')
const { Statistic: StatisticModel } = require('../models/statistic')
const { rankingController } = require('./rankingController')
const { verifyTasksFromUser } = require('./rankingController')

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

            const operation = changePersistStatistic(req.body, user.persistStatistic)
            
            await user.save()

            verifyTasksFromUser(user, operation)

            res
                .status(200)
                .json( { msg: "Estatística alterada com sucesso" })

        } catch (error) {
            console.log(error)
        }
    }
}

function changePersistStatistic(body, persist){
    
    if(body.taskCreated > 0){
        persist.taskCreated ++
        
        return "created"
    }
    else if(body.taskFinished > 0){
        persist.taskFinished ++
        
        return "finished"
    }
    else if(body.taskCanceled > 0){
        persist.taskCanceled ++ 

        return "canceled"
    }
}

module.exports = statisticController 