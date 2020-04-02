require('dotenv').config();
import express,{Application} from 'express';
import {ApolloServer, makeExecutableSchema} from 'apollo-server-express';
import {typeDefs, resolvers} from './graphql';
import {connectDataBase} from './database'
import cors from 'cors';

const app = express();
app.use(cors());



(async (app:Application)=>{
	try	{
		const db = await connectDataBase();
		const schema = makeExecutableSchema({ typeDefs, resolvers });
		const server = new ApolloServer({schema, context: () => ({ db })});
		server.applyMiddleware({app, path: '/api'});

		app.listen(process.env.PORT, ()=>{
			console.log(`[app]: localhost: ${process.env.PORT} started`);
		});

		// const listings = await db.listings.find({}).toArray();
		// console.log(listings);

	} catch (e) {

		console.log('server error');
		process.exit(1);
	}
})(app);