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
