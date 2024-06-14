import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
	title: {
		default: "Next.js Dasar",
		template: "%s | Next.js Dasar",
	},
	description: "Kumpulan belajar next.js dasar",
};

export default function Layout({ children }) {
	return (
		<html lang="en" className={"font-poppins"}>
			<body className="flex flex-col min-h-screen px-4 py-4 bg-gray-100">
				<header>
					<Navbar />
				</header>
				<main className="py-3 grow">{children}</main>
				<footer className="py-3 text-xs text-center border-t">
					[footer]
				</footer>
			</body>
		</html>
	);
}
