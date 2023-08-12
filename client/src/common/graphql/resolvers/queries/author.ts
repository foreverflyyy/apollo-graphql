import {Context} from "@/pages/api/graphql";

const authors = async (parent: any, args: any, context: Context) => {
    return await context.prisma.author.findMany()
}

export default {
    authors
}