const getHealth = (req ,res)=>{
    res.status(200).json({
       success:true,
       message:"servevr is running"
    });
  };

  export {
    getHealth
}