import STUDENTS from '../data/data'

  const getStudent = (req,res)=>{
   res.json({
      success:true,
      data:STUDENTS,
      message:"student data"
   })
 }

 const postStudent = (req,res)=>{
   const {rollNo,Name,city} = req.body
 
 
 if(!rollNo){
  return res.json({
   success:true,
    message:"rollNo is required"
   })
 }
 
  if(!city){
   return res.json({
    success:true,
     message:"city is required"
    })
 
  }
  if(!Name){
   return res.json({
    success:true,
     message:"Name is required"
    })
  }
 
  const studentrollNo = STUDENTS.find((stud)=>{
   if(stud.rollNo == rollNo){
     return stud;
     }
  })
  if(studentrollNo){
   return res.json({
     success:false,
     message:"student is already exits"  
   })
  }
 
  const student={
   rollNo,
   Name,
   city
 }
 STUDENTS.push(student)
 
   res.json({
     suscess:true,
     data:student,
     message:"student is added"
   })
  }

  const deletStudent = (req,res)=>{
   const {rollNo} = req.params;
   let studetIndex = -1;
 
   STUDENTS.map((stud,index)=>{
     if(stud.rollNo == rollNo){
       studetIndex = index;
     }
   })
 
   if(studetIndex==-1){
     return res.json({
       success:false,
       message:"user are not found"
     });
   }
 
   STUDENTS.splice(studetIndex,1);
   res.json({
   success:true,
   message:"deleted succesfully"
   })
  }

  const putStudent = (req,res)=>{
   const {rollNo} = req.params;
   const {Name,city} = req.body;
    let studentIndex = -1;
     
 
   STUDENTS.map((stud,index)=>{
    if(stud.rollNo == rollNo){
     studentIndex = index;
     }
   });
   if(studentIndex == -1){
     return res.json({
       success:false,
       message:"student not found"
     });
   }
   const student = {
    rollNo, 
    Name,
    city  
   }
 
    STUDENTS[studentIndex] = student;
 
    res.json({
     suscess:true,
     data:student,
     message:"added successfully"
    });
  }

  const patchStudent = (req,res)=>{
   const {rollNo} = req.params;
   const {city} = req.body;
   let studentIndex = -1;
 
   STUDENTS.map((stud,index)=>{
     if(stud.rollNo == rollNo){
       studentIndex = index;
     }
   });
 
   if(studentIndex == -1){
     return res.json({
       suscess:false,
       message:"student not found"
     });
   }
   const student =STUDENTS[studentIndex];
   student.city = city
 
   STUDENTS[studentIndex] = student;
 
   res.json({
    suscess:true,
    data:student,
    message:"city update susccessfully"
   });
  }

  const getStudentRoll = (req,res)=>{
   const {rollNo} = req.params;
    let studentIndex = -1;
     
 
   STUDENTS.map((stud,index)=>{
    if(stud.rollNo == rollNo){
     studentIndex = index;
     }
   });
   if(studentIndex == -1){
     return res.json({
       success:false,
       message:"student not found"
     });
   }
    const student = STUDENTS[studentIndex]
 
    res.json({
     suscess:true,
     data:student,
     message:"added successfully"
    });
  }

  export {
   getStudent,postStudent,deletStudent,putStudent,patchStudent,getStudentRoll
  }