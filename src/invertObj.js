var _curry1 = require('./internal/_curry1');
var keys = require('./keys');


/**
 * Returns a new object with the keys of the given object
 * as values, and the values of the given object as keys.
 *
 * @func
 * @memberOf R
 * @category Object
 * @sig {s: x} -> {x: s}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 * @example
 *
 *      var raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      };
 *      R.invertObj(raceResults);
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      var raceResults = ['alice', 'jake'];
 *      R.invertObj(raceResults);
 *      //=> { 'alice': '0', 'jake':'1' }
 */
module.exports = _curry1(function invertObj(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    var value = obj[key];

    if (typeof value === 'object') {
      // How to handle circular references?
      value = JSON.stringify(value);

      // Test if this key was used before and add
      // spaces to ensure uniques. Spaces are ignored
      // by JSON.parse or when recreating functions
      // from strings.
      while (out.hasOwnProperty(value)) {
        value += ' ';
      }
    }

    out[value] = key;
    idx += 1;
  }
  return out;
});
