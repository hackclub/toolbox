import { useSession, signIn } from 'next-auth/react'
import { useState } from 'react'
import { useThemeUI, Text } from 'theme-ui'
import useSWR from 'swr'

export default function Code(props) {
  const { data: session, status } = useSession()
  const { theme } = useThemeUI()
  let [open, setOpen] = useState(false)
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR(`/api/${props.children}`, fetcher, {
    initialData: { key: 'Loading...' },
    refreshInterval: 2000
  })
  if (status === 'authenticated' && session.user) {
    console.log(status, session)
    return <Text sx={{ ...theme.styles.code }}>{data.key}</Text>
  }

  return (
    <>
      <Text
        sx={{ ...theme.styles.code }}
        style={{ cursor: 'pointer' }}
        onClick={() => signIn('slack')}
      >
        👁 Reveal Code 👁
      </Text>
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
