const { buildSchema } = require('graphql')

module.exports = buildSchema(`
        type User {
            id: Int!
            email: String!
            password: String!
            profile: Profile!
        }

        type Auth {
            token: String!
            email: String!
            id: Int!
            tokenExpiration: Int!
        }

        type Profile {
            id: Int!
            bio: String!
            user: User
            userId: Int! 
        }

        input UserInput {
            email: String!
            password: String!
        }

        type RootQuery {
            users: [User!]!
            login(email: String,password: String!): Auth!
        }

        type RootMutation {
            createUser(userInput: UserInput): User 
        }
        schema {
            query: RootQuery
            mutation: RootMutation
        }
`);
