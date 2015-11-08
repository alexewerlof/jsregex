'use strict';

function createRegexp(pattern, flags) {
  if (
    createRegexp._flags === flags
    &&
    createRegexp._pattern === pattern
  ) {
    return createRegexp._return;
  } else {
    createRegexp._flags = flags;
    createRegexp._pattern = pattern;
    return createRegexp._return = new RegExp(pattern, flags);
  }
}

function str(param) {
  // param can be either a string or an array of strings
  return Array.isArray(param) ? param.join('') : param;
}

class RegExpFunctionReturn {
  constructor(type, description) {
    this.name = name;
    this.description = str(description);
  }
}

class RegExpFunctionTarget {
  constructor(type, description) {
    this.name = name;
    this.description = str(copy.functions.exec.description);
  }
}

class RegExpFunctionParam {
  constructor(fn, type, index) {
    const paramDescriptor = copy.functions[fn.name].params[index];
    this.name = paramDescriptor.name;
    this.type = type;
    this.description = str(paramDescriptor.description);
    this.value = undefined;
  }
}

class RegExpFunction {
  constructor(name, targetType, paramTypes, returnType) {
    this.name = name;
    this.description = str(copy.functions.exec.description);
    this.params = paramTypes.map((p, index) => {
      return new RegExpFunctionParam(this, p, index)
    });
    this.ret = new RegExpFunctionReturn(returnType);
  };
}

var exec = new RegExpFunction(
  'exec',
  'regex',
  ['string'],
  'array'
);

exec.do = function () {
  var str = this.params[0].value;
  if (typeof str !== 'string') {
    throw 'First parameter should be a string';
  }
  var regexObj = createRegexp(this.target);
  this.ret.value = regexObj.exec(str);
}

/*
var test = new RegExpFunction(
  'test',
  'A RegExp method that tests for a match in a string. It returns true or false.',
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test',
  'regexObj.test(str)',
  [
    new RegExpFunctionParam(
      'str',
      'string',
      'The string against which to match the regular expression.'
    )
  ],
  new RegExpFunctionReturn(
    'boolean',
    'weather the regular expression matched the string or not'
  )
);

var match = new RegExpFunction(
  'match',
  [
    'A String method that executes a search for a match in a string. ',
    'It returns an array of information or null on a mismatch.'
  ],
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match',
  'str.match(regexp)',
  [
    new RegExpFunctionParam(
      'regexp',
      'regexp',
      [
        'A regular expression object. If a non-RegExp object obj is passed, ',
        'it is implicitly converted to a RegExp by using new RegExp(obj).'
      ]
    )
  ],
  new RegExpFunctionReturn(
    'array',
    'An Array containing the matched results or null if there were no matches.'
  )
);

var search = new RegExpFunction(
  'search',
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search',
  [
    'A String method that tests for a match in a string. ',
    'It returns the index of the match, or -1 if the search fails.'
  ],
  'str.search(regexp)',
  [
    new RegExpFunctionParam(
      'regexp',
      'regexp',
      [
        'A regular expression object. If a non-RegExp object obj is passed, ',
        'it is implicitly converted to a RegExp by using new RegExp(obj).'
      ]
    )
  ],
  new RegExpFunctionReturn(
    'number',
    [
      'If successful, search() returns the index of the first match of the ',
      'regular expression inside the string. Otherwise, it returns -1.'
    ]
  )
);

var replace = new RegExpFunction(
  'replace',
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace',
  [
    'A String method that executes a search for a match in a string, and ',
    'replaces the matched substring with a replacement substring.'
  ],
  'str.replace(regexp|substr, newSubStr|function)',
  [
    new RegExpFunctionParam(
      'substr',
      'string|regex',
      'A String that is to be replaced by newSubStr.'
    ),
    new RegExpFunctionParam(
      'newSubStr',
      'string'
      [
        'The String that replaces the substring received from parameter #1. ',
        'A number of special replacement patterns are supported; see ',
        'the "Specifying a string as a parameter" section below.'
      ]
    ),
    new RegExpFunctionParam(
      'function',
      'function'
      [
        'A function to be invoked to create the new substring (to put in place ',
        'of the substring received from parameter #1). The arguments supplied ',
        'to this function are described in the "Specifying a function as a ',
        'parameter" section below.'
      ]
    )
  ],
  new RegExpFunctionReturn(
    'string',
    'A new string with some or all matches of a pattern replaced by a replacement.'
  )
);

var split = new RegExpFunction(
  'split',
  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split',
  [
    'A String method that uses a regular expression or a fixed string to break ',
    'a string into an array of substrings.'
  ],
  'str.split([separator[, limit]])',
  [
    new RegExpFunctionParam(
      'separator',
      'string'
      [
        'Optional. Specifies the character(s) to use for separating the string. ',
        'The separator is treated as a string or a regular expression. ',
        'If separator is omitted, the array returned contains one element ',
        'consisting of the entire string. If separator is an empty string, ',
        'str is converted to an array of characters.'
      ]
    ),
    new RegExpFunctionParam(
      'limit',
      'number',
      [
        'Optional. Integer specifying a limit on the number of splits to be ',
        'found. The split() method still splits on every match of separator, ',
        'but it truncates the returned array to at most limit elements.'
      ]
    )
  ],
  new RegExpFunctionReturn(
    'string[]',
    [
      'When found, separator is removed from the string and the substrings ',
      'are returned in an array. If separator is not found or is omitted, ',
      'the array contains one element consisting of the entire string. ',
      'If separator is an empty string, str is converted to an array ',
      'of characters.'
    ]
  )
);

*/

angular.module('app').factory('functions', () => ({
  exec //, test, match, search, replace, split
}));
