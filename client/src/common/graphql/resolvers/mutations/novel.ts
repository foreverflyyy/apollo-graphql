import {Context} from "@/pages/api/graphql";

export const addNovel = async (parent: any, args: any, context: Context) => {
    return await context.prisma.novel.create({
        data: {
            title: args.title,
            image: args.image
        }
    })
}
export const updateNovel = async (parent: any, args: any, context: Context) => {
    return await context.prisma.novel.update({
        where: {
            id: args.id
        },
        data: {
            title: args.title,
            image: args.image
        }
    })
}
export const deleteNovel = async (parent: any, args: any, context: Context) => {
    return await context.prisma.novel.delete({
        where: {
            id: args.id
        }
    })
}

export default {
    addNovel,
    updateNovel,
    deleteNovel
}