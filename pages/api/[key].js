import { getSession } from 'next-auth/react'
const Airtable = require('airtable')

export default async function handler(req, res) {
  const session = await getSession({ req })
  if (session != null) {
    const base = new Airtable({ apiKey: process.env.AIRTABLE }).base(
      'appvp3mpqIrosrqdP'
    )
    const record = await base('Codes').find(req.query.key)
    res.json({ key: record.fields.key })
  } else res.json({ key: '👁' })
}
