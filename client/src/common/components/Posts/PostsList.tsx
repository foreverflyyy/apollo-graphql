import React from 'react';
import {getClient} from "@/common/lib/apollo-client";
import {GET_POSTS} from "@/common/graphql/queries";
import {Post} from "@/common/models/Post";
import PostItem from "@/common/components/Posts/PostItem";

interface Response {
    posts: Post[]
}

const getPosts = async () => {
    const {data} = await getClient().query<Response>({
        query: GET_POSTS,
        fetchPolicy: "no-cache",
    });
    return data;
}

const PostsList = async () => {

    const {posts} = await getPosts();
    console.log(posts)

    return (
        <>
            <h4 className={"py-3 text-xl font-semibold"}>List of posts:</h4>
            <div className={"flex space-x-4"}>
                {posts?.map(post => (
                    <PostItem key={post.id} post={post}/>
                ))}
            </div>
        </>
    );
};

export default PostsList;
