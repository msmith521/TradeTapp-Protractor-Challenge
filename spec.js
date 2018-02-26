// spec.js
describe('Protractor Test', function() {
  // #1
  beforeEach(function() {
    browser.get('http://www.protractortest.org/#/api');
  })

  it('should have the header "browser.get" for the browser.get docs', function() {
    //#2
    element(by.id('searchInput')).sendKeys('get')
    //#3
    // originally used element(by.linkText('get')).click()
    // which works, but is prone to bugs because of multiple 'get' functions in the TOC
    // filtering by href removes that potnetial source of errors
    element.all(by.linkText('get')).filter((ele) => {
      return ele.getAttribute('href').then((ref) => {
        return ref === 'http://www.protractortest.org/#/api?view=ProtractorBrowser.prototype.get'
      })
    }).click()
    var getHeader = element(by.className('api-title ng-binding'))
    //#4
    // The full text for the header is 'broswer.get View code'
    expect(getHeader.getText().then((text) => {
        return text.includes('browser.get')
      })
    ).toEqual(true)
  });

   it('should have the header "webdriver.WebElement.sendKeys" for the sendKeys docs', function() {
    //#5
    element(by.id('searchInput')).sendKeys('sendKeys')
    //#6
    element(by.linkText('sendKeys')).click()
    var getHeader = element(by.className('api-title ng-binding'))
    //#7
    expect(getHeader.getText()).toEqual('webdriver.WebElement.sendKeys')
    //#8
    element(by.id('searchInput')).clear()
  });

   it('should have 16 functions under the element.all(locator) section', function() {
    //Entire toc was mapped using ng-repeat('item in items')
    // so I filtered based on title to get the 16 relevent functions
     var menuFunctions = element.all(by.repeater('item in items')).filter((ele) => {
       return ele.getAttribute('title').then((title) => {
        return title.includes('ElementArrayFinder.prototype')
       })
     })
    //#9
    expect(menuFunctions.count()).toEqual(16)
  });

   it('should have 16 functions listed the element.all(locator) documentation', function() {
    element(by.linkText('element.all(locator)')).click()
    var docFunctions = element.all(by.repeater('item in list'))
    //#10
    expect(docFunctions.count()).toEqual(16)
  });
  
});