// protractor.conf.js
exports.config = {
  framework: 'jasmine',
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumServerJar: '',
  specs: ['spec.js'],
  capabilities: {
    browserName: 'chrome'
  }
}
