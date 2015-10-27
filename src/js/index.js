var regexPattern = document.getElementById('regex-pattern');
var regexFlags = document.getElementById('regex-flags');
var regexError = document.getElementById('regex-error');
var testString = document.getElementById('test-string');
var resultsView = document.getElementById('results-view');
var functionSelector = document.getElementById('function-selector');

function getFlags() {
  return regexFlags.value;
}

// Throws an error if can't produce the regular expression
function getRegEx() {
  return new RegExp(regexPattern.value, getFlags());
}

function getExec(regex) {
  regex.lastIndex = 0;
  return regex.exec(testString.value);
}

// TODO: use this. quote a string (and replace all new lines with \n)
function quote ( str ) {
  return '"' + str.replace( /\n/g, '\\n' ) + '"';
}

function showResults(results) {
  resultsView.innerHTML = '';
  if (Array.isArray(results)) {
    var li = '';
    getExec(getRegEx()).forEach(function (result) {
      li += '<li>' + result + '</li>';
    });
    if (li) {
      resultsView.innerHTML = '<ol>' + li + '</ol>';
    }
  } else {
    // Boolean, number, string
    // TODO: Sanetize the html
    resultsView.innerHTML = results;
  }
}

function updatePage() {
  var regEx, fn, results;
  try {
    regEx = getRegEx();
  } catch (ex) {
    // TODO: Sanetize the html
    regexError.innerHTML = ex;
  }

  try {
    fn = functionSelector.selectedOptions[0].dataset;
    if (fn.target === 's') {
      // The target is the string
      results = testString.value[fn.name](regEx);
    } else {
      // The target is the regular expression
      results = regEx[fn.name](testString.value);
    }
    showResults(results);
  } catch (ex) {
    // TODO: catch the exception
  }
}

var timeoutId = 0;
function requestToUpdatePage() {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = 0;
  }
  timeoutId = setTimeout(updatePage, 200);
}

regexPattern.onkeyup = requestToUpdatePage;
regexFlags.onkeyup = requestToUpdatePage;
testString.onkeyup = requestToUpdatePage;
