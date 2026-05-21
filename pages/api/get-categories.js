import manifest from '../../manifest.js';

/**
 * @brief Get categories list as an array of strings.
 */
function getCategories() {
	let categories = [];

	for (let i = 0; i < manifest.length; i++) {
		const entry = manifest[i];
		categories.push(entry.category);
	}

	return categories;
}

export default function handler(req, res) {
	if (req.method !== "GET") {
		res.setHeader("Allow", ["GET"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
		return;
	}

	res.status(200).json(getCategories());
}
