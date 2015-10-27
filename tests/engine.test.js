describe('engine', () => {
  describe('createRegexp', () => {
    it('returns a regex', () => {
      expect(createRegexp('abc', '') instanceof RegExp).toBeTruthy();
    });

    it('returns the same regex if the parameters are exactly the same', () => {
      var ret1 = createRegexp('abc', '');
      var ret2 = createRegexp('abc', '');
      expect(ret1).toBe(ret2);
    });
  });
});
