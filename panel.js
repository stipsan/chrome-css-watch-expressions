console.log(this);

document.body.innerHTML = '<h1>Hi!</h1>';

var page_getProperties = function() {
  var data = window.getComputedStyle(document.querySelector('a'));
  // Make a shallow copy with a null prototype, so that sidebar does not
  // expose prototype.
  var props = Object.getOwnPropertyNames(data);
  var copy = { __proto__: null };
  for (var i = 0; i < props.length; ++i) {
    if(props[i] == 'color') {
      copy[props[i]] = data[props[i]];

    }
  }
  return copy;
}

var expr = "(" + page_getProperties.toString() + ")()";
chrome.devtools.inspectedWindow.eval(expr, function(result, isException){
  if (isException) {
    throw new Error('Eval failed for ' + expr, isException.value);
  } else {
    document.body.innerHTML = JSON.stringify(result);
  }
});
