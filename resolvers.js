const { users } = require('../testData')
const resolvers = {
    Query: {
        users() {
            return users;
        }
    },

    Mutation: {
        addUser(parent, {data}) {
            const newUser = data;
            users.push(newUser);
            return newUser
        }
    }
}

module.exports = { resolvers }