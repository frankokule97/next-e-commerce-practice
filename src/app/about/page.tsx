import Link from "next/link";

export default function About() {
    return (
        <>
            <h1 className="text-5xl font-bold">Learn more about us!</h1>
            <Link href="/about/team" className="text-lg text-blue-500">Meet Out Team</Link>
        </>
    )
}