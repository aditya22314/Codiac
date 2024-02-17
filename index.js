const express =require('express')

const app =express();  

const port = 8000;

app.listen(port,(err)=>{
    if(err){
        console.log(`The error: ${err}`)
    } 
    console.log(`Server running smoothly at port ${port}`)
})