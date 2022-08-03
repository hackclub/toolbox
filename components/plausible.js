import Script from 'next/script'

const Plausible = () => (
    <Script defer data-domain="toolbox.hackclub.com" src="https://plausible.io/js/plausible.js" />
)

export default Plausible