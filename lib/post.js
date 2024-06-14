import { marked } from "marked";
import qs from "qs";

export const CACHE_TAG_POSTS = "posts";
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

	if (data.length === 0) {
		return null;
	}

	const { attributes } = data[0];
	return {
		...toPost({ attributes }),
		body: marked(attributes.body, { headerIds: false, magless: false }),
	};
}

export async function getAllPosts(pageSize, page) {
	const { data, meta } = await fetchPost({
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
		pagination: { pageSize, page },
	});

	return {
		pageCount: meta.pagination.pageCount,
		posts: data.map(toPost),
	};
}

export async function getSlugs() {
	const { data } = await fetchPost({
		fields: ["slug"],
		sort: ["publishedAt:desc"],
		pagination: { pageSize: 100 },
	});

	return data.map(({ attributes }) => attributes.slug);
}

async function fetchPost(parameters) {
	const url =
		`${BackendUrl}/api/posts?` +
		qs.stringify(parameters, { encodeValuesOnly: true });

	const response = await fetch(url, {
		next: { tags: [CACHE_TAG_POSTS] },
	});

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
