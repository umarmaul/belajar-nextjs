import Heading from "@/components/Heading";
import Link from "next/link";

export default function BlogPage() {
	return (
		<>
			<Heading>Blog Page</Heading>
			<p className="text-2xl mb-3">List of posts</p>
			<div className="flex flex-wrap">
				<div className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
					<div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
						<img src="/images/image-1.jpg" className="w-full" />
						<Link href="/blog/belajar-nextjs">
							<div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition durration-300 ease-in-out hover:opacity-50 bg-[hsl(0,0%,90%)]"></div>
						</Link>
					</div>
				</div>
				<div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
					<h5 className="text-lg font-bold">Belajar Next.js</h5>
					<p className="mb-3 text-gray-800">
						<small>
							Published <u>13.01.2023</u> by{" "}
							<a href="#!">Admin</a>
						</small>
					</p>
					<p className="text-gray-800">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Itaque quasi dolorem commodi mollitia hic corrupti.
						Ratione quaerat rem natus accusantium facilis, expedita,
						molestias minus voluptatem modi impedit cumque aliquam
						illum. Quasi laborum quos explicabo nisi similique fugit
						asperiores minima ipsa corporis dignissimos porro
						recusandae voluptatibus
					</p>
				</div>
			</div>
			<div className="flex flex-wrap">
				<div className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
					<div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
						<img src="/images/image-1.jpg" className="w-full" />
						<Link href="/blog/belajar-nextjs">
							<div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition durration-300 ease-in-out hover:opacity-50 bg-[hsl(0,0%,90%)]"></div>
						</Link>
					</div>
				</div>
				<div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
					<h5 className="text-lg font-bold">Belajar Next.js</h5>
					<p className="mb-3 text-gray-800">
						<small>
							Published <u>13.01.2023</u> by{" "}
							<a href="#!">Admin</a>
						</small>
					</p>
					<p className="text-gray-800">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Itaque quasi dolorem commodi mollitia hic corrupti.
						Ratione quaerat rem natus accusantium facilis, expedita,
						molestias minus voluptatem modi impedit cumque aliquam
						illum. Quasi laborum quos explicabo nisi similique fugit
						asperiores minima ipsa corporis dignissimos porro
						recusandae voluptatibus
					</p>
				</div>
			</div>
			<div className="flex flex-wrap">
				<div className="mb-4 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-2/12">
					<div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg">
						<img src="/images/image-1.jpg" className="w-full" />
						<Link href="/blog/belajar-nextjs">
							<div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition durration-300 ease-in-out hover:opacity-50 bg-[hsl(0,0%,90%)]"></div>
						</Link>
					</div>
				</div>
				<div className="mb-6 mr-auto w-full shrink-0 grow-0 basis-auto px-3 md:mb-0 md:w-9/12 xl:w-7/12">
					<h5 className="text-lg font-bold">Belajar Next.js</h5>
					<p className="mb-3 text-gray-800">
						<small>
							Published <u>13.01.2023</u> by{" "}
							<a href="#!">Admin</a>
						</small>
					</p>
					<p className="text-gray-800">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Itaque quasi dolorem commodi mollitia hic corrupti.
						Ratione quaerat rem natus accusantium facilis, expedita,
						molestias minus voluptatem modi impedit cumque aliquam
						illum. Quasi laborum quos explicabo nisi similique fugit
						asperiores minima ipsa corporis dignissimos porro
						recusandae voluptatibus
					</p>
				</div>
			</div>
		</>
	);
}
