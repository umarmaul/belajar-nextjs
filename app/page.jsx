"use client";

import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		window.alert("Hello World");
	}, []);

	return (
		<>
			<div>
				<h1>Home Page</h1>
			</div>
			<p>Next.js Fundamental</p>
		</>
	);
}
