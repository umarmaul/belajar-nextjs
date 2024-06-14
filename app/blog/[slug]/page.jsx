import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getPost } from "@/lib/post";

export async function generateStaticParams() {
	const slugs = await getSlugs();
	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
	const post = await getPost(slug);
	return { title: post.title, description: post.description };
}

export default async function BlogPage({ params: { slug } }) {
	const { title, date, author, image, body } = await getPost(slug);

	return (
		<div>
			<Heading>{title}</Heading>
			<div className="flex items-baseline gap-3 pb-2">
				<p className="pb-2 text-sm italic">
					{date} by {author}
				</p>
				<ShareLinkButton />
			</div>
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
