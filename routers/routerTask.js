const express = require ('express');
const { createTask, updateTask, getTask, deleteTask } = require('../controller/controllerTask');

const router = express.Router()



router.post('/register', createTask)

router.get('/profile/get/:id', getTask)

router.put('profile/update/:id', updateTask)

router.delete('/profile/delete/:id', deleteTask)




module.exports = router