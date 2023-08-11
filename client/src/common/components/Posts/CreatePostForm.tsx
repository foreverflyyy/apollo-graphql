"use client"
import React, {useState} from 'react';
import MyInput from "@/common/components/UI/MyInput";
import MyButton from "@/common/components/UI/MyButton";
import {useMutation} from "@apollo/client";
import {CREATE_POST} from "@/common/graphql/mutations";

const CreatePostForm = () => {

    const [authorId, setAuthorId] = useState("");
    const [body, setBody] = useState("");

    const [createPost] = useMutation(CREATE_POST);

    const handlerClickRequest = async () => {
        await createPost({
            variables: {
                id: Date.now(),
                authorId,
                body
            }
        })

        setAuthorId("");
        setBody("");
    };

    return (
        <div className={""}>
            <MyInput
                value={authorId}
                onChange={(event) => setAuthorId(event.target.value)}
                placeholder={"Enter authorId..."}
            />
            <MyInput
                value={body}
                onChange={(event) => setBody(event.target.value)}
                placeholder={"Enter body..."}
            />
            <MyButton
               onClick={handlerClickRequest}
            >
                Create
            </MyButton>
        </div>
    );
};

export default CreatePostForm;