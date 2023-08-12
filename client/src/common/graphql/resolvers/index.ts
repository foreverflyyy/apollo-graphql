import {Context} from "@/pages/api/graphql";
import novelQueries from "@/common/graphql/resolvers/queries/novel";
import novelMutations from "@/common/graphql/resolvers/mutations/novel";
import authorMutations from "@/common/graphql/resolvers/mutations/author";
import authorQueries from "@/common/graphql/resolvers/queries/author";

export const resolvers = {
    Query: {
        ...novelQueries,
        ...authorQueries
    },
    Mutation: {
        ...novelMutations,
        ...authorMutations
    },
    Novel: {
        authors: async (parent: any, args: any, context: Context) => {
            return await context.prisma.author.findMany()
        }
    }
};