var assert = require('assert');

var calc = require('../src/calc.js');

describe("calc#minVolumeForBouyancy()", function() {
  describe("a helium-filled object with 0.5 kg mass", function() {
    var options = {
      fluidDensity: 1.2093, // density of air
      objectDensity: 0.1664, // density of helium at STP
      mass: 0.5
    };
    it("needs a volume of .4794 cubic meters to be bouyant", function() {
      var res = calc.minVolumeForBouyancy(options);
      assert.equal(res.toFixed(4), 0.4794);
    });
  });
});

