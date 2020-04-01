import { IResolvers } from 'apollo-server-express';
import { listings } from '../listings';

export const resolvers: IResolvers = {

	Query: {
		listings: () => {
			return listings;
		}
	},

	Mutation: {
		deleteListings: (_root: undefined, { id }: { id: string }) => {
			try {
				const idx = listings.findIndex(item => item.id == id);
				return listings.splice(idx, 1)[0];
			} catch (e) {
				throw new Error('failed to delete');
			}
		}
	}
};