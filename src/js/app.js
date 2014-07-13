// Main JS File

$(document).ready(function() {
  // Paste your JS here
});

// TODO: Include here a note
// Mobile IE Viewport Fix
// if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
//   var msViewportStyle = document.createElement('style');
//   msViewportStyle.appendChild(
//     document.createTextNode(
//       '@-ms-viewport{width:auto!important}'
//     )
//   );
//   document.querySelector('head').appendChild(msViewportStyle);
// }

// Conditionizr Init
conditionizr({
  debug: false,
  scriptSrc: false,
  styleSrc: false,
  ieLessThan: {active: true, version: "9", scripts: false, styles: false, classes: true, customScript: false },
  chrome: {scripts: false, styles: false, classes: true, customScript: false },
  safari: {scripts: false, styles: false, classes: true, customScript: false },
  opera: {scripts: false, styles: false, classes: true, customScript: false },
  firefox: {scripts: false, styles: false, classes: true, customScript: false },
  ie10: {scripts: false, styles: false, classes: true, customScript: false },
  ie9: {scripts: false, styles: false, classes: true, customScript: false },
  ie8: {scripts: false, styles: false, classes: true, customScript: false },
  ie7: {scripts: false, styles: false, classes: true, customScript: false },
  ie6: {scripts: false, styles: false, classes: true, customScript: false },
  retina: {scripts: false, styles: false, classes: true, customScript: false },
  touch: {scripts: false, styles: false, classes: false, customScript: false },
  mac: true,
  win: true,
  x11: true,
  linux: true
});
