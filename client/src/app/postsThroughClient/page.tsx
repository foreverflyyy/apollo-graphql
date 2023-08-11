"use client"

import React from 'react';
import PostItem from "@/common/components/Posts/PostItem";
import {useQuery} from "@apollo/client";
import {GET_POSTS} from "@/common/graphql/queries";
import {Post} from "@/common/models/Post";
import Link from "next/link";

export default function Page() {

    const {data, error, loading} = useQuery(GET_POSTS, {
        pollInterval: 500,
    });

    console.log(data?.posts);

    return (
        <div className={"flex w-full flex-col justify-center items-center"}>
            <Link
                href={"/postsThroughServer/create"}
                className={"mt-5 p-2 border-2 border-black rounded-2xl text-xl hover:text-white hover:bg-blue-400 duration-300"}
            >
                Create new post
            </Link>
            <h4 className={"py-3 text-xl font-semibold"}>List of posts:</h4>
            <div className={"grid grid-cols-3"}>
                {data?.posts?.map((post: Post) => (
                    <PostItem key={post.id} post={post}/>
                ))}
            </div>
        </div>
    );
};
