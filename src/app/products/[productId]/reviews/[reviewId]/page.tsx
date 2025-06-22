export default async function ReviewDetails(props: {params: {productId: string, reviewId: string}}) {
    const { productId } = await props.params
    const { reviewId } = await props.params
    return (
        <div>
            <h1 className="text-5xl font-bold-mb-4">Product: {productId}</h1>
            <h2 className="text-5xl font-bold-mb-4">Review: {reviewId}</h2>
            <p className="text-lg">Details about review {reviewId} for product {productId}</p>
        </div>
    )
}