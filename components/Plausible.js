import Script from 'next/script'

export default function Plausible() {
  return (
    <Script
      defer
      data-domain="toolbox.hackclub.com"
      src="https://plausible.io/js/plausible.js"
    />
  )
}
