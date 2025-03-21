import { SITE_NAME, SITE_URL } from "../constants";
import type { Element, ElementF } from "types";
import Header from "./header";
import Footer from "./footer";

export default function Base({
	children,
	head,
	title,
	Menu,
	header,
	footer,
	indexable,
	meta,
}: {
	children?: Element;
	head?: Element;
	title: string;
} & (
	| {
			indexable?: true;
			meta: {
				description: string;
				keywords: Array<string> | string;
				og?: {
					title: string;
					description: string;
					image: string;
					url: string;
				};
			};
	  }
	| {
			indexable: false;
			meta?: null;
	  }
) &
	(
		| {
				header?: true;
				footer?: true;
				Menu: ElementF;
		  }
		| {
				header?: false;
				footer?: false;
				Menu?: ElementF;
		  }
	)) {
	return (
		<html lang="en-US">
			<head>
				<meta charset="UTF-8" />
				<link rel="icon" href="/static/favicon" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="stylesheet" href="/static/styles.css" />
				{meta && (
					<>
						<meta name="description" content={meta.description} />
						<meta
							name="keywords"
							content={
								typeof meta.keywords === "string"
									? meta.keywords
									: meta.keywords.join(", ")
							}
						/>
						{meta.og && (
							<>
								<meta name="og:description" content={meta.og.description} />
								<meta name="og:title" content={meta.og.title} />
								<meta
									name="og:image"
									content={`${SITE_URL}/static/${meta.og.image}`}
								/>
								<meta name="og:url" content={`${SITE_URL}/${meta.og.url}`} />
							</>
						)}
					</>
				)}
				<meta name="robots" content={indexable ?? true ? "index, follow" : "noindex"} />
				<title>
					{title} - {SITE_NAME}
				</title>
				{head}
			</head>
			<body class="min-h-screen flex flex-col">
				<div class="flex-1 flex flex-col">
					{(header ?? true) && <Header Menu={Menu!} />}
					{children}
				</div>
				{(footer ?? true) && <Footer Menu={Menu!} />}
			</body>
			<script type="module">{`[...document.querySelectorAll("img")].forEach(image => image.draggable = false);`}</script>
		</html>
	);
}
