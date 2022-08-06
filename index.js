const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { ppid } = require('process');
const ejsLayouts = require('express-ejs-layouts'); // pobieranie biblioteki layout

//view engine
app.set('view engine', 'ejs') // musimy powiedziec ze bedziemy korzystac z ejs
app.set('views', path.join(__dirname + '/views')) //tu musimy wskazac scezke pliku z widokami

//set layout
app.use(ejsLayouts);
app.set('layout','./layouts/main');

// public foldedr
app.use(express.static('public'));


app.get('/', (req,res) => {
    res.render('pages/home', {
        title: 'Strona główna',
        url: req.url,
    } )
})



app.get('/firmy/:name', (req,res) => {
    const {name}  = req.params;

    console.log(req.params.name)
    const companies = [
        { slug: 'tworcastron', name: 'Tworc Stron.pl' },
        { slug: 'brukmode', name: 'Bruk Mode' }
    ];
   
    const company = companies.find(x => x.slug === name );

    res.render('pages/company', { 
        name: company?.name, 
        companies,
        title: company?.name ?? "Brak wyniku",
        url: req.url,
    })
})



    app.get('*', (req,res) => {
    res.render('errors/404', {
        title: 'nie znaleziono',
        layout:'layouts/minimalistic',
        url: req.url
    });
});





app.listen(port)
