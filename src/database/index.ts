import {MongoClient} from 'mongodb';

const user = 'andriy';
const password ='tjohCQ4nWySubyZN';
const cluster ='cluster0-3jjff';

const url = `mongodb+srv://${user}:${password}@${cluster}.mongodb.net/test?retryWrites=true&w=majority`;

export const connectDataBase = async ()=>{

	const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true  });
	const db = client.db('main');

	return {
		listings: db.collection('main_listings')
	}
};
