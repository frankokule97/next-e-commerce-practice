import {formatDate} from "@/app/_utils/formatDate";

interface BlogContentProps {
    blogId: string;
}

export default async function BlogContent({blogId}: BlogContentProps) {
    const publishedDate = "2025-01-01"
    return (
        <div>
            <h1 className="text-5xl font-bold mb-4">Blog Post: {blogId}</h1>
            <p className="text-gray-500 text-lg mb-4">Published on: {formatDate(publishedDate)}</p>
            <div className="text-lg">This is the content of blog post {blogId}</div>
        </div>
    )
}