const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { ppid } = require('process');

app.set('view engine', 'ejs') // musimy powiedziec ze bedziemy korzystac z ejs
app.set('views', path.join(__dirname + '/views')) //tu musimy wskazac scezke pliku z widokami



app.get('/', (req,res) => {
    res.render('home', {name1} )
})

const name1 = 'sasdasd';

app.get('/firmy/:name', (req,res) => {
    const { name } = req.params;
    const companies = [
        { slug: 'tworcastron', name: 'Tworc Stron.pl' },
        { slug: 'brukmode', name: 'Bruk Mode' }
    ];
   
    const company = companies.find(x => x.slug === name );

    res.render('company', { 
        name: company?.name, 
        companies,
    })
})



    app.get('*', (req,res) => {
    res.render('errors/404');
});





app.listen(port)
