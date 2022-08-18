// konfiguracja ogólna aplikacji

const express = require('express');
const app = express();
const path = require('path');
const { ppid } = require('process');
const ejsLayouts = require('express-ejs-layouts'); // pobieranie biblioteki layout

//init db
require('./db/mongoose');


//view engine
app.set('view engine', 'ejs') // musimy powiedziec ze bedziemy korzystac z ejs
app.set('views', path.join(__dirname + '/../views')) //tu musimy wskazac scezke pliku z widokami

//set layout
app.use(ejsLayouts);
app.set('layout','./layouts/main');

// public foldedr
app.use(express.static('public'));

// mount routers

app.use(require('./routes/web.js'))


module.exports = app;