import PostsList from "@/common/components/Posts/PostsList";
import Link from "next/link";
import React from "react";

export default async function Page() {

    return (
        <div className="flex flex-col items-center">
            <Link
                href={"/postsThroughServer/create"}
                className={"mt-5 p-2 border-2 border-black rounded-2xl text-xl hover:text-white hover:bg-blue-400 duration-300"}
            >
                Create new post
            </Link>
            <PostsList/>
        </div>
    )
}