import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
        <h3 className={"text-2xl pb-5"}>Choose your favourite:</h3>
        <Link
            href={"/postsThroughApi"}
            className={"text-xl font-semibold hover:text-blue-500 duration-300 pb-2"}
        >
            Posts through Next API.
        </Link>

        <Link
            href={"/postsThroughClient"}
            className={"text-xl font-semibold hover:text-blue-500 duration-300 pb-2"}
        >
            Posts through Client Component
        </Link>

        <Link
            href={"/postsThroughServer"}
            className={"text-xl font-semibold hover:text-blue-500 duration-300 pb-2"}
        >
            Posts through Server Component from Backend (Nest.js).
        </Link>
    </main>
  )
}