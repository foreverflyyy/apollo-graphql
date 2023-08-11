import {gql} from "@apollo/client";

export const CREATE_POST = gql`
    mutation CreatePost($id: ID!, $authorId: String!, $body: String!) {
        createPost(createPostInput: {id: $id, authorId:  $authorId, body: $body}) {
            id
            authorId
            body
        }
    }
`