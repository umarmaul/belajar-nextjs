import Heading from "@/components/Heading";
import Pagination from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";

export const metadata = {
	title: "Blog",
};

export default async function BlogPage({ searchParams }) {
	const page = parsePageParam(searchParams?.page);
	const { pageCount, posts } = await getAllPosts(3, page);

	return (
		<>
			<Heading>Blog Page</Heading>
			<h2 className="mb-3 text-2xl">List of posts</h2>
			<Pagination href="/blog" page={page} pageCount={pageCount} />
			{posts.map((post, index) => (
				<PostCard
					key={index}
					title={post.title}
					href={`/blog/${post.slug}`}
					image={post.image}
					description={post.description}
					date={post.date}
					author={post.author}
				/>
			))}
		</>
	);
}

function parsePageParam(paramValue) {
	if (paramValue) {
		const page = parseInt(paramValue);
		if (isFinite(page) && page > 0) {
			return page;
		}
	}

	return 1;
}
