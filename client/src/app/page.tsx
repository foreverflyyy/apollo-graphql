import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
        <h3 className={"text-2xl pb-5"}>Choose your favourite:</h3>
        <Link
            href={"/postsThroughApi"}
            className={"text-xl font-semibold hover:text-blue-500 duration-300"}
        >
            Posts through Next API.
        </Link>

        <Link
            href={"/postsThroughServer"}
            className={"text-xl font-semibold hover:text-blue-500 duration-300"}
        >
            Posts through Server on Backend (Nest.js).
        </Link>
    </main>
  )
}