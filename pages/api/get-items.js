import manifest from '../../manifest.js';

function getCategoryToItemsMap() {
	let map = {};

	for (let i = 0; i < manifest.length; i++) {
		const entry = manifest[i];
		map[entry.category] = entry.items;
	}

	return map;
}

export default function handler(req, res) {
	if (req.method !== "GET") {
		res.setHeader("Allow", ["GET"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
		return;
	}

	let categoryName = req.query.category;

	// // if no category chosen, send all categories
	// if (categoryName === undefined) {
	// 	res.status(200).json({ categories: manifest });
	// 	return;
	// }

	const map = getCategoryToItemsMap();

	if (!map.hasOwnProperty(categoryName)) {
		res.status(400).end(`400 Bad Request\nInvalid category name "${categoryName}".`);
		return;
	}

	const items = map[categoryName];
	res.status(200).json(items);
}
