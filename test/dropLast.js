var assert = require('assert');

var R = require('..');


describe('dropLast', function() {
  it('skips the last `n` elements from a list, returning the remainder', function() {
    assert.deepEqual(R.dropLast(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), ['a', 'b', 'c', 'd']);
  });

  it('returns an empty array if `n` is too large', function() {
    assert.deepEqual(R.dropLast(20, ['a', 'b', 'c', 'd', 'e', 'f', 'g']), []);
  });

  it('returns an equivalent list if `n` is <= 0', function() {
    assert.deepEqual(R.dropLast(0, [1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(R.dropLast(-1, [1, 2, 3]), [1, 2, 3]);
    assert.deepEqual(R.dropLast(-Infinity, [1, 2, 3]), [1, 2, 3]);
  });

  it('never returns the input array', function() {
    var xs = [1, 2, 3];

    assert.notStrictEqual(R.dropLast(0, xs), xs);
    assert.notStrictEqual(R.dropLast(-1, xs), xs);
  });

  it('can operate on strings', function() {
    assert.strictEqual(R.dropLast(3, 'Ramda'), 'Ra');
  });

  it('is curried', function() {
    var dropLast2 = R.dropLast(2);
    assert.deepEqual(dropLast2(['a', 'b', 'c', 'd', 'e']), ['a', 'b', 'c']);
    assert.deepEqual(dropLast2(['x', 'y', 'z']), ['x']);
  });
});
