"use client"

import React, {useState} from 'react';
import MyInput from "@/common/UI/MyInput";
import MyButton from "@/common/UI/MyButton";

const FormForRequest = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("")

    const handlerClickRequest = () => {
        console.log("click request")
    }

    return (
        <div className={""}>
            <MyInput
                value={login}
                onChange={(event) => setLogin(event.target.value)}
                placeholder={"Enter login..."}
            />
            <MyInput
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder={"Enter password..."}
            />
            <MyButton
               onClick={handlerClickRequest}
            >
                Request
            </MyButton>
        </div>
    );
};

export default FormForRequest;