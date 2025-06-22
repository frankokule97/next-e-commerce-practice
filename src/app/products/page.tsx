import Link from "next/link";

export default function Products() {
    const productIds = ['product1', 'product2', 'product3']
  return (
      <div>
          <h1 className="text-5xl font-bold mb-4">Products</h1>
          <ul>
              {productIds.map((productId) => (
                  <li key={productId}>
                      <Link href={`/products/${productId}`} className="text-blue-500 text-lg">{productId}</Link>
                  </li>
              ))}
          </ul>
      </div>
  )
}
