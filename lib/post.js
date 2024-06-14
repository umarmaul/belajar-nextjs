import { marked } from "marked";
import { readdir } from "node:fs/promises";
import qs from "qs";

const BackendUrl = "http://localhost:1337";

export async function getPost(slug) {
	const { data } = await fetchPost({
		filters: {
			slug: {
				$eq: slug,
			},
		},
		fields: [
			"title",
			"slug",
			"description",
			"publishedAt",
			"author",
			"body",
		],
		populate: {
			image: {
				fields: ["url"],
			},
		},
		pagination: { pageSize: 1, withCount: false },
	});

	const { attributes } = data[0];
	return {
		...toPost({ attributes }),
		body: marked(attributes.body, { headerIds: false, magless: false }),
	};
}

export async function getAllPosts() {
	const { data } = await fetchPost({
		fields: [
			"title",
			"slug",
			"description",
			"publishedAt",
			"author",
			"body",
		],
		populate: {
			image: {
				fields: ["url"],
			},
		},
		sort: ["publishedAt:desc"],
		pagination: { pageSize: 3 },
	});

	return data.map(toPost);
}

export async function getSlugs() {
	const files = await readdir("./content/blog");
	return files
		.filter((file) => file.endsWith(".md"))
		.map((file) => file.slice(0, -".md".length));
}

async function fetchPost(parameters) {
	const url =
		`${BackendUrl}/api/posts?` +
		qs.stringify(parameters, { encodeValuesOnly: true });

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	return await response.json();
}

function toPost({ attributes }) {
	return {
		slug: attributes.slug,
		title: attributes.title,
		description: attributes.description,
		date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
		image: BackendUrl + attributes.image.data.attributes.url,
		author: attributes.author,
	};
}
