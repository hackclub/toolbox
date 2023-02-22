import { getSession } from 'next-auth/react'
const AirtablePlus = require('airtable-plus')

export default async function handler(req, res) {
  const session = await getSession({ req })
  if (session != null) {
    const airtable = new AirtablePlus({
      baseID: 'appvp3mpqIrosrqdP',
      apiKey: process.env.AIRTABLE,
      tableName: 'Codes'
    })
    const record = await airtable.find(req.query.key)
    req.json({ key: record.fields.key })
  } else res.json({ key: '👁' })
}
