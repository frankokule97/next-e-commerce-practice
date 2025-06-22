import Link from "next/link";

export default function Home() {
  return (
      <div>
        <h1 className="text-5xl font-bold">Welcome to the Home Page!</h1>
          <div className="flex gap-x-6">
              <Link href="/about" className="text-lg text-blue-500">
                  About
              </Link>
              <Link href="/contact" className="text-lg text-blue-500">
                  Contact
              </Link>
              <Link href="/products" className="text-lg text-blue-500">
                  Products
              </Link>
          </div>
      </div>
  )
 }
