const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://swarup1234:Swarup340@ds213183.mlab.com:13183/swarup1234',(err,client)=>{
if(err){
   return console.log('Unable to connect mongodb server');
}
console.log('conected to mongodb server');
const db = client.db('swarup1234')
db.collection('swarup1234').insertOne({
    text:'something to do',
    completed:false
},(err,result)=>{if(err){
    return console.log('Unable to insert',err);
}   console.log(JSON.stringify(result.ops,undefined,2));   
});
    client.close();
})