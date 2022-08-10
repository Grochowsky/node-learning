const app = require('./app.js')
const { port } = require('./config')


app.listen(port, () => console.log(`serwer uruchomiony na porcie ${port}`))

//stawianie serwera