'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center bg-black/90">
            <h1 className="text-9xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-white mb-2">Page not Found!</h2>
            <p className="text-lg text-gray-200 mb-6">
                Sorry, the page <span className="text-xl font-bold text-red-500">{pathname}</span> you're looking for doesn't exist.
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