module.exports = {
    checkForbidenString(value, forbidenString) {
        if (value===forbidenString){
            throw new Error('nazwa slug jest zakazana')
        }
    }
};