export default async function OptionalCatchAllRoute (props: {params: {slug? : string[]}}) {
    const { slug } = await props.params

    return (
        <div>
            <h1 className="text-5xl font-bold mb-4">Products</h1>
            {slug ? (
                <>
                    <p className="text-lg">Segments captured in the URL:</p>
                    <ul className="mt-2">
                        {slug.map((segment, index) => (
                            <li key={index} className="text-blue-500 text-lg">
                                {segment}
                            </li>
                        ))}
                    </ul>
                </>
                    ) : ( <p className="text-lg text-gray-500">No additional segments provided.</p> )
            }
        </div>
    )
}