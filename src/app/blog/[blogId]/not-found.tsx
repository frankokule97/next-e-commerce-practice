import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center bg-black/90">
            <h1 className="text-6xl font-bold text-red-500 mb-4">Blog Not Found</h1>
            <h2 className="text-2xl font-semibold text-white mb-2">Oops! This blog post doesn't exist.</h2>
            <p className="text-lg text-gray-200 mb-6">
                Looks like this blog post is missing or has been removed.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg font-medium
                hover:bg-blue-600 transition">
                Go Back Home
            </Link>
        </div>
    )
}