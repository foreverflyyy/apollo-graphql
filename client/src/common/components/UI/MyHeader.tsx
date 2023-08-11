import React from 'react';
import Link from "next/link";

const MyHeader = () => {
    return (
        <div className={"h-[50px] w-full bg-blue-400"}>
            <div className={"h-full px-10 flex items-center justify-between"}>
                <Link
                    href={"/postsThroughApi"}
                    className={"text-xl text-white hover:text-black duration-300"}
                >
                    Posts through Api
                </Link>

                <Link
                    href={"/postsThroughServer"}
                    className={"text-xl text-white hover:text-black duration-300"}
                >
                    Posts through Backend
                </Link>
            </div>
        </div>
    );
};

export default MyHeader;
