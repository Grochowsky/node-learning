const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'))



app.get('/', (req,res) => {
    res.render('home')
})

app.get('/kontakt',(req,res) => {
res.send('asdada')
})

const users = [{name: 'jan', age: 2},{name: 'jaalann', age: 21}]
app.get('/users',(req,res) => {
    let html = `Siemanko wariaty sraty`
    users.forEach(user => html+=`<h1>${user.name}</h1>`)
    res.send(html)
})

app.listen(port)
;