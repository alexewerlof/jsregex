var copy = {
  "functions": {
    "exec": {
      "description": [
        "A RegExp method that executes a search for a match in a string.",
        "It returns an array of information."
      ],
      "reference": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec",
      "syntax": "regexObj.exec(str)",
      "params": [
        {
          "name": "str",
          "description": "The string against which to match the regular expression."
        }
      ],
      "return": {
        "type": "array",
        "description": [
          "If the match succeeds, the exec() method returns an array and updates ",
          "properties of the regular expression object. The returned array has the ",
          "matched text as the first item, and then one item for each capturing ",
          "parenthesis that matched containing the text that was captured. ",
          "If the match fails, the exec() method returns null."
        ]
      }
    }
  }
}
