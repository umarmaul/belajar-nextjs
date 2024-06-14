"use client";

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/24/solid";

export default function ShareLinkButton() {
	const [copied, setCopied] = useState(false);

	function handleCopyLink() {
		navigator.clipboard.writeText(window.location.href);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	}

	return (
		<button
			onClick={handleCopyLink}
			className="flex items-center gap-1 px-2 py-1 text-sm text-gray-500 border rounded hover:bg-gray-200 hover:text-gray-700"
		>
			<LinkIcon className="inline w-4 h-4" />
			{copied ? "Copied!" : "Copy Link"}
		</button>
	);
}
