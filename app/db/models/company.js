const mongoose = require('mongoose');
const Schema = mongoose.Schema; // pobieraamy schema
const {checkForbidenString} = require('../validators');




const companySchema = new Schema({
    slug: {
        type: String,
        required: [true, 'Pole slug jest wymagane'], // pole slug jest wymagane
        minLength: [3, ' Minimalnaa liczba znaków w slug to 3'], // minimalna liczba znakow
        valaidate: value => {
            if (value==="slug"){
                throw new Err('Nazwa SLUG jest zakazana'); // customowa waalidacja. jesli dodasz slug name to wtedy wyrzuci blad
            }
        },
        trim: true,  // usuwa biale znaki
        lowercase:true, // zmienia wszystko na male litery
    },
    name: {
        type: String,
        required: [true, ' Pole name jest wymagane']
    },
    employesCount: {
        type: Number,
        min: 1,
        default: 1,
    }
})

const Company = mongoose.model('Company', companySchema )

module.exports = Company;