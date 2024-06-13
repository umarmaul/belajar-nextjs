import Heading from "@/components/Heading";

export default function BlogPage() {
	return (
		<div>
			<Heading>Belajar Next.js</Heading>
			<img
				src="/images/image-1.jpg"
				alt="image-1"
				width={640}
				height={360}
				className="mb-2 rounded"
			/>
			<p>Halaman judul berita</p>
		</div>
	);
}
