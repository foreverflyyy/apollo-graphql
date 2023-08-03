import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
        <Link
            href={"/appeal"}
            className={"text-xl font-semibold"}
        >
            Go to Form address
        </Link>
    </main>
  )
}