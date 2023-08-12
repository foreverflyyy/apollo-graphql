export const novel = `#graphql
    type Novel {
        id: ID!
        title: String
        image: String
        createdAt: String
        updatedAt: String
        authors: [Author]
    }
`