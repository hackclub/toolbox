import { useSession, signIn } from 'next-auth/client'
import { useState } from 'react'
import { Themed } from 'theme-ui'
import useSWR from 'swr'

export default function Code(props) {
  console.log(props)
  const [session, loading] = useSession()
  let [open, setOpen] = useState(false)
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR(`/api/${props.children}`, fetcher, {
    initialData: { key: 'Loading...' },
    refreshInterval: 2000
  })
  if (session) {
    return <Themed.code>{data.key}</Themed.code>
  }

  return (
    <>
      <Themed.code
        style={{ cursor: 'pointer' }}
        onClick={() => signIn('slack')}
      >
        👁 Reveal Code 👁
      </Themed.code>
      <style>
        {`
        .hidden-at-first{
          display: ${open ? 'flex' : 'none'}!important
        }
        `}
      </style>
    </>
  )
}
