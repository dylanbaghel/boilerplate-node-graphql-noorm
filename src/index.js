import { GraphQLServer } from 'graphql-yoga';

import resolvers from './resolvers/resolvers';

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context(request) {
        return {
            db: 'db'
        };
    }
});

server.start({ port: process.env.PORT }, () => {
    console.log('Server is Up', process.env.PORT);
})