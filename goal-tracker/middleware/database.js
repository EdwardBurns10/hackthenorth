import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
const client = new MongoClient('mongodb+srv://Edward:proofofconcept@cluster0.bi9ko.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
async function database(req, res, next) {
    if (!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db('Goals');
    return next();
}
const middleware = nextConnect();
middleware.use(database);
export default middleware;