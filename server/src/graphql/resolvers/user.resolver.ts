import {Args, Int, Parent, ResolveField, Resolver} from "@nestjs/graphql";
import {User} from "../models/user.model";
import {Query} from "@nestjs/common";

@Resolver(of => User)
export class UsersResolver {
    constructor(
        private userService: UserService,
    ) {}

    @Query()
    async user(@Args('id') id: number) {
        return this.userService.findOneById(id);
    }

    /*@Resolver('Author')
    @ResolveField()
    async posts(@Parent() author) {
        const { id } = author;
        return this.postsService.findAll({ authorId: id });
    }*/
}