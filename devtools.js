// Copyright (c) 2015 Stian Didriksen. All rights reserved.
// @TODO Will be a MIT license

// The function below is executed in the context of the inspected page.
var page_getProperties = function() {
  var data = window.getComputedStyle($0);
  // Make a shallow copy with a null prototype, so that sidebar does not
  // expose prototype.
  var props = Object.getOwnPropertyNames(data);
  var copy = { __proto__: null };
  for (var i = 0; i < props.length; ++i)
    copy[props[i]] = data[props[i]];
  return copy;
}

chrome.devtools.panels.elements.createSidebarPane(
    "Watch Expressions",
    function(sidebar) {
  function updateElementProperties() {
    console.log("(" + page_getProperties.toString() + ")()");
    console.dir(sidebar);
    sidebar.setExpression("(" + page_getProperties.toString() + ")()", 'title', {}, '', function(){console.log('callback!', this, arguments)});
    console.log(chrome.devtools);
    console.log(chrome.devtools.panels.elements);
  }
  updateElementProperties();
  chrome.devtools.panels.elements.onSelectionChanged.addListener(
      updateElementProperties);
});
