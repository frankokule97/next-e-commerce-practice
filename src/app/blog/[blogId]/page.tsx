import {notFound} from "next/navigation";

export default async function BlogPost(props: {params: {blogId: string}}) {
    const { blogId } = await props.params

    if(parseInt(blogId) > 100) {
        notFound()
    }

    return (
        <div>
            <h1 className="text-5xl font-bold mb-4">Blog: {blogId}</h1>
            <p className="text-lg">Details about blog {blogId}</p>
        </div>
    )
}