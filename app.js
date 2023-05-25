const http = require('http');
const fs = require('fs');
const express = require('express');
const bodyparser = require('body-parser');

const path = require('path');

const app = express();
const port = 80;

// app.use('public', express.static('public'));
app.use(express.static(path.join(__dirname, '')));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, ''));


app.get('/',(req,res)=>{

    res.render('index.pug');
});
app.get('/course',(req,res)=>{

    res.render('Courses.pug');
});
app.get('/Contact',(req,res)=>{

    res.status(202).render('contact.pug');
});
app.post('/Contact',(req,res)=>{

    const myData = new contactDetail(req.body);
    myData.save().then(()=>{
   
      res.render('sub.pug');
    }).catch(()=>{

     res.send('');
    });

})


app.listen(port,()=>{

     console.log("Successfully ported on 80");
})