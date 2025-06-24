import {notFound} from "next/navigation";
import BlogContent from "./BlogContent";

export default async function BlogPost(props: {params: {blogId: string}}) {
    const { blogId } = await props.params

    if(parseInt(blogId) > 100) {
        notFound()
    }

    return (
        <div>
            <BlogContent blogId={blogId} />
        </div>
    )
}