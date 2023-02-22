import theme from '@hackclub/theme'
import Meta from '@hackclub/meta'
import Head from 'next/head'
import { ThemeProvider } from 'theme-ui'
import { SessionProvider } from 'next-auth/react'
import Plausible from '../components/Plausible'
import '../public/scrollbar.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <ThemeProvider
      theme={{
        ...theme,
        colors: { ...theme.colors, modes: {} },
        styles: {
          ...theme.styles,
          code: {
            fontFamily: 'monospace',
            fontSize: 'inherit',
            color: 'black',
            bg: 'sunken',
            borderRadius: 'small',
            mx: 1,
            px: 1
          }
        }
      }}
    >
      <SessionProvider session={session}>
        <Meta
          as={Head}
          name="Hack Club"
          title="Toolbox"
          description="Tools for hacking, learning, and leading."
          image="https://cloud-n8brj3kg9-hack-club-bot.vercel.app/0toolbox_meta.png"
          color="#ec3750"
        />
        <Component {...pageProps} />
        <Plausible />
      </SessionProvider>
    </ThemeProvider>
  )
}
