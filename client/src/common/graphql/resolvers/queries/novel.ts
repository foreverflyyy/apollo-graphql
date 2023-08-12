import {Context} from "@/pages/api/graphql";

const novels = async (parent: any, args: any, context: Context) => {
    return await context.prisma.novel.findMany()
}

const novel = async (parent: any, args: any, context: Context) => {
    return await context.prisma.novel.findUnique({
        where: {
            id: args.id
        }
    })
}

export default {
    novels,
    novel: novel
}