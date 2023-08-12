import {Context} from "@/pages/api/graphql";

const addAuthor = async (parent: any, args: any, context: Context) => {
    return await context.prisma.author.create({
        data: {
            novelId: args.novelId,
            name: args.name
        }
    })
}

export default {
    addAuthor
}