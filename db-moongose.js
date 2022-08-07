const mongoose = require('mongoose');
const Schema = mongoose.Schema; // pobieraamy schema

mongoose.connect('mongodb://localhost:27017/node-kurs')

//model
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


// setter tworzenie - przypisujemy do schematu
companySchema.path('slug').set((value) => value.toLowerCase())
companySchema.path('name').set((value) => value.toLowerCase())


async function main(){
    //const companies = await Company.find({});
    //console.log(companies);

    const company  = new Company ({
        name: '    Jede  ',
        slug: "  Ss  ss",
        employesCount: 2,
    });
    try {
        await company.save();
    } catch (e) {
        console.log(`Coś poszło nie tak - error zobaczysz w dalszej części po dwukropku: ${e.errors.slug.message}`);
        for (const key in e.errors) {  // tutaj lecimy pętlą po errorach zeby wyswietlic wszystkie errory :D
            console.log(e.errors[key].message)
        }
    }

    
}

main()

