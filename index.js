const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { ppid } = require('process');
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'))



app.get('/', (req,res) => {
    res.render('home')
})


app.get('/firmy/:name', (req,res) => {
    const { name } = req.params;
    const compnies = [
        { slug: 'tworcastron', name: 'Tworc Stron.pl' },
        { slug: 'brukmode', name: 'Bruk Mode' }
    ]
   
    const company = companies.find(x => x.slug === name );
    res.render('company', { name: company?.name })
})



    app.get('*', (req,res) => {
    res.render('errors/404');
});





app.listen(port)
