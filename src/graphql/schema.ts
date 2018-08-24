import { makeExecutableSchema } from 'graphql-tools';

const users: any[] = [
    {
        id: 1,
        name: 'Jon',
        email: 'jon@email.com'
    },
    {
        id: 2,
        name: 'Dany',
        email: 'dany@email.com'
    }
];

const typeDefs = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [User!]!
    }
`;

/**
 * O resolver para o tipo **User** não precisaria 
 * ser declarado por conta dos resolvers trivias 
 * que já fariam o mapeamento de suas propriedades
 * para o mesmo nome das propriedades no objeto pai
 */
const resolvers = {
    Query: {
        allUsers: () => users
    }
};

export default makeExecutableSchema({typeDefs, resolvers});