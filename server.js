const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./models/user')


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:false}))

mongoose.connect('mongodb+srv://dhinesh:MHfjTH2vG0BUfcvt@cluster0.alht5.mongodb.net/master-student?retryWrites=true&w=majority')
.then(()=>console.log('db connected'))
.catch(()=>console.log('db has error'))

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/',async (req,res)=>{
    const username = req.body.username 
    const password  = req.body.password
    const usertype = req.body.usertype
    const email  = req.body.email
    
    const newUser = User({
        username,
        email,
        password,
        usertype
    })
    
    try {
        await newUser.save()
    } catch (err) {
        console.log('error')
    }

    res.send('data saved')
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.post('/',async (req,res)=>{
    const email  = req.body.email
    const password  = req.body.password
    
    const user = await User.findOne({ email,password});
    if (!user) res.send("No user found with this username", 404);
    res.send('user found')
})


app.listen(5000,()=>{
    console.log('app has started successfully')
})