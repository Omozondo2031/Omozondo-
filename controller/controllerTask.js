const User = require('../models/schema');

const createTask = async (req, res)=>{
   try {
    const task = await User.create(req.body)
    res.status(200).json(task)
   } catch (error) {
    res.status(500).json({msg: error.message})
   }
}


const getTask = async(req, res)=>{
   try {
    const {id} = req.params
   const task = await User.findById(id)
   if(!task){
    return res.status(404).json(`Sorry no task found with that id:${id}`)
   }
   res.status(200).json(task)
   } catch (error) {
    res.status(500).json({error: error.message})
   }
}

const updateTask = async (req,res)=>{
try {
    const {id} = req.params
    const task = await User.findByIdAndUpdate({_id:id},req.body, {new:true})
    if(!task){
        return res.status(404).json(`Sorry no task found with that id:${id}`)
       }
    res.status(200).json(task)
} catch (error) {
    res.status(500).json({msg: error.message})
}
}

const deleteTask = async (req, res)=>{
    try {
        const {id} = req.params
        const task = await User.findByIdAndDelete(id)
        if(!task){
            return res.status(404).json(`Sorry no task found with that id:${id}`)
           }
        res.status(200).send(`Task deleted successfully`)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    createTask,

    updateTask,

    getTask,

    deleteTask
}