function isUnsupportedBrowser() {
  return true;
  // IE 10 and IE 11
  // return /Trident\/|MSIE/.test(window.navigator.userAgent);
}

export default isUnsupportedBrowser;
