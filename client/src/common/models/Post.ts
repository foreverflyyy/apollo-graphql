import {User} from "@/common/models/User";

export interface Post {
    authorId: number,
    id: number,
    body: string,
    user?: User,
}