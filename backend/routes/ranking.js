const router = require('express').Router()
const {checkToken} = require('../controllers/utils/checkToken')

const {rankingController} = require('../controllers/rankingController') 

router
    .route('/ranking')
    .get(checkToken, (req, res) => rankingController.get(req, res))

router
    .route('/view-profile')
    .post(checkToken, (req, res) => rankingController.viewProfile(req, res))

router
    .route('/search')
    .post(checkToken, (req, res) => rankingController.searchUser(req, res))

module.exports = router