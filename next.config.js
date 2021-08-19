const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home'
      }
    ]
  }
})
