import {MongoClient} from 'mongodb';
import {Database} from '../lib/types'


const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/test?retryWrites=true&w=majority`;

export const connectDataBase = async ():Promise<Database> =>{

	const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true  });
	const db = client.db('main');
	return {
		listings: db.collection('main_listings')
	}

};
