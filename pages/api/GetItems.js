import manifest from '../../manifest.js';

/// @brief Check if string can be translated to an integer. Not a float or hexadecimal.
function isValidInteger(inStr) {
	return typeof inStr === "string" && /^-?\d+$/.test(inStr);
}

export default function handler(req, res) {
	if (req.method !== "GET")
	{
		res.setHeader("Allow", ["GET"]);
		res.status(405).end(`Method ${req.method} Not Allowed`);
		return;
	}

	let categoryID = req.query.category;

	// if no category chosen, send all categories
	if (categoryID === undefined)
	{
		res.status(200).json({ categories: manifest });
		return;
	}

	// if categoryID exists but not valid integer
	if (!isValidInteger(categoryID))
	{
		res.status(400).end(`400 Bad Request\nInvalid category ID "${categoryID}"; Non-integer.`);
		return;
	}

	categoryID = Number(categoryID);

	// validate categoryID
	if (categoryID < 0 || categoryID >= manifest.length)
	{
		res.status(400).end(`400 Bad Request\nInvalid category ID "${categoryID}"; Out of bounds, category length is ${manifest.length}.`);
		return;
	}

	const items = manifest[categoryID];
	res.status(200).json(items);
}
