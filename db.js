const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'node-kurs';


async function main() {
    await client.connect();
    console.log('Połączenie udane!');

    const db = client.db(dbName);

   // await client
     //   client.db(dbName);
       // .collection('companies');
        //.insertOne({slug: 'tworcastron', name:'Tworcastron'});

        const res = await db.collection('companies').findOne({slug: 'tworcastron'});
        console.log(res)

    }

main()
.catch(err => console.log(err))
.finally(()=>client.close())