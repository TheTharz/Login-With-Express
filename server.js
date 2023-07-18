const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.set('view engine', 'ejs');
//home route
app.get('/', (req,res)=>{
    res.render('base',{title:"Login System"});
})

app.listen(port, ()=>{
    console.log('listening to the sever on http://localhost:3000');
});