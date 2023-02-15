const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const { typeDefs } = require('./schema/typeDefs');
const { resolvers } = require('./schema/resolvers');

// Create Server 
(async () => {
    try {
        // Create an Express app and HTTP server; 
		const app = express();
		// const httpServer = createServer(app);
        const server =  new ApolloServer({ typeDefs, resolvers});
        await server.start();
        server.applyMiddleware({app});

        const port = 3000;

        app.listen(port, () =>{
            console.log(`Server Running at port ${port}`)
        });
    } catch (error) {
		console.log("Server failed to start.", error);
	}
})();