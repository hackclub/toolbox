import { useState } from 'react'
import NextApp from 'next/app'
import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'
import Meta from '@hackclub/meta'
import Head from 'next/head'
import '../public/scrollbar.css'

var GeoPattern = require('geopattern')

export default function App(props) {
  const { Component, pageProps } = props
  const [generalBG] = useState(
    GeoPattern.generate((Math.random() + 1).toString(36).substring(7), {
      baseColor: '#ec3750'
    }).toDataUrl()
  )
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
      <Meta
        as={Head}
        name="Hack Club" // site name
        title="Toolbox" // page title
        description="Tools for hacking, learning and leading." // page description
        image="https://cloud-n8brj3kg9-hack-club-bot.vercel.app/0toolbox_meta.png" // large summary card image URL
        color="#ec3750" // theme color
        manifest="/site.webmanifest" // link to site manifest
      />
      <Component {...pageProps} generalBG={generalBG} />
    </ThemeProvider>
  )
}
