class CompanyController {

    showCompany(req,res){
        const {name}  = req.params;
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
    }
}

module.exports = new CompanyController()