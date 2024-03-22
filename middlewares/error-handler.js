const {customAPIError}=require('../errors/custom-error')
const errorHandlerMiddleware=(err,req,res,next)=>{
    if(err instanceof customAPIError){
        res.status(err.status).json({msg:err.msg})
    }
    res.status(500).json({msg:'something went wrong'})
}

module.exports=errorHandlerMiddleware