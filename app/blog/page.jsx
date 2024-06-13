import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";

export default async function BlogPage() {
	const posts = await getAllPosts();
	console.log(posts);

	return (
		<>
			<Heading>Blog Page</Heading>
			<p className="text-2xl mb-3">List of posts</p>

			<PostCard
				title="Belajar Next.js"
				href="/blog/belajar-nextjs"
				image="/images/image-1.jpg"
				description="Deskripsi Belajar Next.js"
				date="13.01.2023"
				author="Admin"
			/>
			<PostCard
				title="Belajar Next.js"
				href="/blog/belajar-nextjs"
				image="/images/image-1.jpg"
				description="Deskripsi Belajar Next.js"
				date="13.01.2023"
				author="Admin"
			/>
		</>
	);
}
