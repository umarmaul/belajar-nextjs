import Heading from "@/components/Heading";
import { getPost } from "@/lib/post";

export async function generateMetadata({ params: { slug } }) {
	const post = await getPost(slug);
	return { title: post.title, description: post.description };
}

export default async function BlogPage({ params: { slug } }) {
	const { title, date, author, image, body } = await getPost(slug);

	return (
		<div>
			<Heading>{title}</Heading>
			<p className="pb-2 text-sm italic">
				{date} by {author}
			</p>
			<img
				src="/images/image-1.jpg"
				alt={image}
				width={640}
				height={360}
				className="mb-2 rounded"
			/>
			<article
				dangerouslySetInnerHTML={{ __html: body }}
				className="max-w-screen-sm prose prose-slate"
			></article>
		</div>
	);
}
