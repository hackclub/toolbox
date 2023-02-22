/** @type {import('next').NextConfig} */
module.exports = {
  experiments: {
    topLevelAwait: true
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home'
      }
    ]
  }
}
