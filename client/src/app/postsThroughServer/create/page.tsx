import CreatePostForm from "@/common/components/Posts/CreatePostForm";
import Link from "next/link";
import React from "react";

export default async function Page() {
    return (
        <div className="flex flex-col items-center">
            <Link
                href={"/postsThroughServer"}
                className={"mt-5 mb-2 p-2 border-2 border-black rounded-2xl text-xl hover:text-white hover:bg-blue-400 duration-300"}
            >
                Back to posts
            </Link>
            <CreatePostForm/>
        </div>
    )
}