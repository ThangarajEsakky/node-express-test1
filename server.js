var hbs = require('hbs');
var express = require('express');
var app = express();

const port = process.env.PORT || 3000

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'))

app.get('/', (req,res)=>{
    res.render('home.hbs',{
        title : 'Home'
    })
})
app.get('/home', (req,res)=>{
    res.render('home.hbs',{
        title : 'home'
    })
})
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        title : 'About'
    })
})

app.use((req,res,next)=>{
  res.render('Error.hbs')
})

app.listen(port,()=>{
    console.log('Server running on port 3000')
})