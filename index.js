const express = require('express');

const app = express();

// const fn = ()=> setTimeout(fn);
// const fn = ()=> process.nextTick(fn);


app.get('/',  (req, res)=>{
    console.log(12345)
res.status(200).send({msg: "hello wold"});
// fn();
})

app.get('/hello',  (req, res)=>{
    res.status(200).send({msg: "hello wold"});
})

app.listen(3000, ()=>{
    console.log('server running ')
})