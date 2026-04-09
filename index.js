import express from 'express';

const app =express();

app.get('/',(req,res)=>{
  res.send("hellow wolrd")
});

app.listen(3003,()=>{
  console.log('Server is runnning on port 3000');
  
})