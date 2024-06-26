const router = require('express').Router()
const {checkToken} = require('../controllers/utils/checkToken')

const userController = require('../controllers/userController')

// Requisição GET para todos os usúarios
router
    .route('/users')
    .get(checkToken, (req, res) => userController.getAll(req, res))

// Requisição GET para um único usúario
router
    .route('/user') 
    .get(checkToken, (req, res) => userController.get(req, res))

router
    .route('/user/personalization')
    .get(checkToken, (req, res) => userController.get_infos_personalization(req, res))
    
// Requisição DELETE para dos usúarios
router
    .route('/user')
    .delete(checkToken, (req, res) => userController.delete(req, res))

// Requisição PATCH para dos usúarios
router
    .route('/user') 
    .patch(checkToken, (req, res) => userController.update(req, res))

router 
    .route('/user/security')
    .post(checkToken, (req, res) => userController.verifyPassword(req, res))

module.exports = router;