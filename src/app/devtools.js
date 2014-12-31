// Copyright (c) 2015 Stian Didriksen. All rights reserved.
// @TODO Will be a MIT license

chrome.devtools.panels.elements.createSidebarPane(
    "Watch Expressions",
    function(sidebar) {
  function updateElementProperties() {
    sidebar.setPage('panel.html');
    //sidebar.setExpression("(" + page_getProperties.toString() + ")()", 'title', {}, '', function(){console.log('callback!', this, arguments)});
    console.log(chrome.devtools);
    console.log(chrome.devtools.panels.elements);
  }
  updateElementProperties();
});
