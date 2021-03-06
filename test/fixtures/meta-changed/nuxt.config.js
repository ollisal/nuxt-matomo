module.exports = {
  rootDir: __dirname,
  dev: false,
  router: {
    base: '/app/'
  },
  modules: [
    ['@/../../../', {
      onMetaChange: true,
      debug: true,
      siteId: 2,
      matomoUrl: './'
    }]
  ]
}
