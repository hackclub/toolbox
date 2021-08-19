import { getSession } from "next-auth/client";
const AirtablePlus = require("airtable-plus");

export default async (req, res) => {
  const session = await getSession({ req });
  console.log(session);
  if (session != null) {
    const airtable = new AirtablePlus({
      baseID: "appvp3mpqIrosrqdP",
      apiKey: process.env.AIRTABLE,
      tableName: "Codes",
    });
    const record = await airtable.find(req.query.key);
    res.json({ key: record.fields.key });
  } else {
    res.json({ key: "👁" });
  }
};
