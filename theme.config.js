import Meta from '@hackclub/meta'

export default {
  github: null,
  siteGithub: 'https://github.com/hackclub/toolbox',
  titleSuffix: ' – Hack Club Toolbox',
  nextLinks: false,
  prevLinks: false,
  search: true,
  customSearch: null,
  darkMode: true,
  footer: true,
  footerText: (
    <React.Fragment>
      For <a href="https://hackclub.com/">Hack Club</a>. Built with{' '}
      <a href="https://nextra.vercel.app">Nextra</a>.
    </React.Fragment>
  ),
  footerEditOnGitHubLink: false,
  logo: (
    <React.Fragment>
      <span
        className="mr-2 font-extrabold hidden md:inline"
        style={{ color: '#e42d42' }}
      >
        Hack Club
      </span>
      <span
        className="font-normal hidden md:inline"
        style={{ color: '#e42d42' }}
      >
        Toolbox
      </span>
    </React.Fragment>
  ),
  head: (
    <Meta
      name="Hack Club Toolbox"
      description="Deals for Hack Clubbers."
      image="/banner.png"
    />
  )
}
