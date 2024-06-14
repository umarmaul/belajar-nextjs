import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getPost, getSlugs } from "@/lib/post";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const slugs = await getSlugs();
	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
	const post = await getPost(slug);
	if (!post) {
		notFound();
	}
	return { title: post.title, description: post.description };
}

export default async function BlogPage({ params: { slug } }) {
	const { title, date, author, image, body } = await getPost(slug);
	if (!title) {
		notFound();
	}

	return (
		<div>
			<Heading>{title}</Heading>
			<div className="flex items-baseline gap-3 pb-2">
				<p className="pb-2 text-sm italic">
					{date} by {author}
				</p>
				<ShareLinkButton />
			</div>
			<Image
				src={image}
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
