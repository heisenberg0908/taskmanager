const asyncWrapper=require('../middlewares/async')
const Task=require('../models/Task')
const {createCustomError, CustomAPIError}=require('../errors/custom-error')




const getAllTasks=asyncWrapper(async(req,res)=>{
    const tasks= await Task.find({})
    res.status(200).json({tasks})
})

const getTask=asyncWrapper(async(req,res,next)=>{
    const {id:taskID}=req.params;
    const task=await Task.findOne({_id:taskID})
    if(!task){
        return next(createCustomError(`no task found with id ${taskID}`))
    }
    res.status(200).json({task})
})

const createTask=asyncWrapper(async(req,res)=>{
    const tasks=await Task.create(req.body)
    res.status(200).json({tasks})
})

const deleteTask=asyncWrapper(async(req,res,next)=>{
    const {id:taskID}=req.params
    const task=await Task.findOneAndDelete({_id:taskID})
    if(!task){
        return next(createCustomError(`no task found with id ${taskID}`))
    }
    res.status(200).json({task})
})

const updateTask=asyncWrapper(async(req,res,next)=>{
    const {id:taskID}=req.params
    const task=await Task.findOneAndUpdate({_id:taskID})
    if(!task){
        return next(createCustomError(`no task found with id ${taskID}`))
    }
    res.status(200).json({task})
})

module.exports={
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask
}