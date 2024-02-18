const express =require('express')

const app =express();  

const port = 8000;

app.use('/',require('./routes'))   //no need to specify the index.js inside routes  
app.set("view engine",'ejs')
app.set('views','./views')
app.listen(port,(err)=>{
    if(err){
        console.log(`The error: ${err}`)
    } 
    console.log(`Server running smoothly at port ${port}`)
})