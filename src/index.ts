import express,{Application} from 'express';
import {ApolloServer, makeExecutableSchema} from 'apollo-server-express';
import {typeDefs, resolvers} from './graphql';
import {connectDataBase} from './database'
import cors from 'cors';

const app = express();
const port = 9005;



const start = async (app:Application) => {
	const db = await connectDataBase();
	const schema = makeExecutableSchema({ typeDefs, resolvers });
	const server = new ApolloServer({schema, context: () => ({ db })});
	server.applyMiddleware({app, path: '/api'});
	app.use(cors());

	app.listen(port, ()=>{
		console.log(`[app]: localhost: ${port} started`);
	});

const listings = await db.listings.find({}).toArray();
	console.log(listings);
};

start(app);