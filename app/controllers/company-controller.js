const Company = require('../db/models/company')

class CompanyController {

   async showCompanies(req,res) {
        const companies = await Company.find({});

        res.render('pages/companies',{
            companies,
            url: req.url,
            title: "asd",
        } )
    }

    async showCompany(req,res){
        const {name}  = req.params;

       
        const company = await Company.findOne({ slug:name });
    
        res.render('pages/company', { 
            name: company?.name, 
            title: company?.name ?? "Brak wyniku",
            url: req.url,
        })
    }
}

module.exports = new CompanyController()