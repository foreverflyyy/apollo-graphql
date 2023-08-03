import {readFileSync} from "fs";
import path from "path";
import {usersResolver} from "./resolvers/user.resolver";

const userTypes = readFileSync(path.join(__dirname, "./models/user.model.ts"), {
    encoding: "utf-8",
});

export const typeDefs = `
    ${userTypes}
`;

export const resolvers = {
    Query: {
        ...usersResolver.Query,
    },
    Mutation: {
        ...usersResolver.Mutation,
    },
};