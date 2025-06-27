import Link from "next/link";

export default async function ProductPage({ params }:  { params: Promise<{productId: string}> }) {
    const reviews = ['review1', 'review2', 'review3']
    const resolvedParams = await params
    const productId  = resolvedParams.productId

    return (
        <div>
            <h1 className="text-5xl font-bold mb-4">Product: {productId}</h1>
            <p className="text-lg">Details about product - {productId}</p>
            <ul>
                {reviews.map((review) => (
                    <li key={review}>
                        <Link href={`/products/${productId}/reviews/${review}`} className="text-blue-500 text-lg">{review}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
