import Link from "next/link";

export default function Navbar() {
	return (
		<nav>
			<ul className="flex gap-2">
				<li>
					<Link
						href="/"
						className="text-gray-800 hover:underline font-poppins"
					>
						Home
					</Link>
				</li>
				<li className="ml-auto">
					<Link
						href="/blog"
						className="text-gray-800 hover:underline font-poppins"
					>
						Blog
					</Link>
				</li>
				<li>
					<Link
						href="/contact"
						className="text-gray-800 hover:underline font-poppins"
						prefetch={false}
					>
						Contact
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className="text-gray-800 hover:underline font-poppins"
					>
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
}
