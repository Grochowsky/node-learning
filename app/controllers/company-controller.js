const Company = require('../db/models/company')

class CompanyController {

   async showCompanies(req,res) {
        const companies = await Company.find({});

        res.render('pages/companies/companies',{
            companies,
            title: 'asda'
        } )
    }

    async showCompany(req,res){
        const {name}  = req.params;

       
        const company = await Company.findOne({ slug:name });
    
        res.render('pages/companies/company', { 
            name: company?.name, 
            title: company?.name ?? "Brak wyniku",

        })
    }

    showCreateCompanyForm(req,res){
        res.render('pages/companies/create', {title:'Doodaj firmę'})
    }

    async createCompany(req,res){
        console.log(req.body)
        const company = new Company({
            name: req.body.name,
            slug: req.body.slug,
            employesCount: req.body.employesCount,

        });
        try{
            await company.save();
            res.redirect('/firmy');
        } catch(e) {
 
            res.render('pages/companies/create',{
                errors: e.errors,
                title: 'ffff',
                form: req.body,
            })
        }
        
    }
}

module.exports = new CompanyController()