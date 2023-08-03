import {GraphQLResolveInfo} from "graphql/type";

interface GetUsersArgs {
    info: GraphQLResolveInfo;
}

interface GetUserArgs extends GetUsersArgs {
    id: string;
}

interface UserInput {
    login: string,
    password: string
}

const users = [
    {id: 1, login: "nik@mail.ru", password: "nikolay"},
]

export const getUsers = async ({info}: GetUsersArgs) => {
    return users;
}

export const getUser = async ({id, info}: GetUserArgs) => {
    return users.find(user => user.id === Number(id));
}

export const createUser = async ({login, password}: UserInput) => {

    if(!login || !password)
        return;

    const createdUser = {
        id: Date.now(),
        login,
        password
    };

    users.push(createdUser);
    return createdUser;
};