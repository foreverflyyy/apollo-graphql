import React from 'react';
import {Post} from "@/common/models/Post";

const PostItem = ({post}: {post: Post}) => {
    return (
        <div className={"p-3 border-2 rounded-2 border-black"}>
            <p>{post.id}</p>
            <p>{post.body}</p>
            <p>{post.authorId}</p>
        </div>
    );
};

export default PostItem;
