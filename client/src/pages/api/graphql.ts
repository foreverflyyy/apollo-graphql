import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import {PrismaClient} from "@prisma/client";
import {prisma} from "../../../prisma/db";
import {resolvers} from "@/common/graphql/resolvers";
import {typeDefs} from "@/common/graphql/schemas";

export type Context = {
    prisma: PrismaClient
}

const apolloServer = new ApolloServer<Context>({
    resolvers,
    typeDefs,
});

export default startServerAndCreateNextHandler(apolloServer, {
    context: async(req, res) => ({req, res, prisma})
});