const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/node-kurs')

//w moongose tworymy model firmy

const Company = mongoose.model('Company', {
    slug: {
        type: String,
        required: [true, 'Pole slug jest wymagane'],
        minLength: [3, ' Minimalnaa liczba znaków w slug to 3']
    },
    name: {
        type: String,
        required: [true, ' Pole name jest wymagane']
    }
})

async function main(){
    //const companies = await Company.find({});
    //console.log(companies);

    const company  = new Company ({
        name: '',
        slug: "ss"
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

