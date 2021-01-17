import nextConnect from 'next-connect';
import middleware from '../../middleware/database';
import {ObjectID, Query} from 'mongodb';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    let doc = await req.db.collection('dailyTasks').findOne()
    console.log(doc);
    res.json(doc);
});


// handler.post(async (req, res) => {
//   let data = req.body
//   data = JSON.parse(data);
//   let doc = await req.db.collection('dailyTasks').updateOne({date: new Date(data.date)},  {upsert: true})
//
//   res.json({message: 'ok'});
// })

export default handler;