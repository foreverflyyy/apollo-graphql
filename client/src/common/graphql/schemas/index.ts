import {novel} from "@/common/graphql/schemas/novel";
import {author} from "@/common/graphql/schemas/author";

export const typeDefs = `#graphql
    ${novel}
    ${author}
    
    type Query {
        novel(id: ID!): Novel
        novels: [Novel],
        authors: [Author]
    }
    
    type Mutation {
        addNovel(title: String!, image: String!): Novel,
        updateNovel(id: ID!, title: String, image: String): Novel,
        deleteNovel(id: ID!): Novel,
        addAuthor(novelId: String!, name: String!): Author
    }
`;