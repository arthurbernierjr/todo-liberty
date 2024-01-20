const todoCtrl = require('../controllers/todoController.js')
const express = require('express')
const router = express.Router()

router.get('/', todoCtrl.index) // x
router.post('/', todoCtrl.create) // x
router.put('/:id', todoCtrl.update) // x
router.delete('/:id', todoCtrl.destroy) // x
router.get('/:id', todoCtrl.show) // x

module.exports = router