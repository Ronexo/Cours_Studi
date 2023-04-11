function isTextLengthGreaterThan5(element) {
    return element.length > 5
  }
  
  let webBrowsers = ['Opera', 'Safari', 'Internet Explorer', 'Vivaldi', 'Firefox', 'Chrome', 'Edge']

  console.log(webBrowsers.every(isTextLengthGreaterThan5))

  webBrowsers.sort();
  console.log(webBrowsers);

  let webBrowserFilter = webBrowsers.filter(isTextLengthGreaterThan5);
  console.log(webBrowserFilter);

  console.log(webBrowserFilter.join(' - '));
  