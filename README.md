archimedes-principle
---

I had a question [about helium](https://physics.stackexchange.com/questions/104640/what-volume-of-helium-at-standard-ambient-pressure-and-temperature-is-required-t)...

The following script will serve as the example for this readme by answering that question with the help of Archimedes' principle and the [ideal gas law](https://github.com/keyvanfatehi/gas-density-calculator) ...

```javascript
// install: `npm install gas-density-calcuator archimedes-principle`
var gaslaw = require('gas-density-calculator');
var archimedes = require('./');

// What volume of helium at standard pressure and temperature is required to lift one kilogram total mass?

var totalMass = 1;

// First get the density of helium at STP
var densityHelium = gaslaw.getDensity({
  molecularWeightGramMole: 4.002602,
  temperatureKelvin: 273.15,
  pressureKiloPascal: 101.325
});

// now get the density of air at STP
var densityAir = gaslaw.getDensity({
  molecularWeightGramMole: 28.97, // Molecular mass of air: http://www.engineeringtoolbox.com/molecular-mass-air-d_679.html
  temperatureKelvin: 273.15,
  pressureKiloPascal: 101.325
});

// Now determine the volume
var minVolume = archimedes.minVolumeForBouyancy({
  fluidDensity: densityAir,
  objectDensity: densityHelium,
  mass: totalMass
}).toFixed(4);

var gallons = minVolume * 264.17;

console.log("at standard temperature and pressure, a "+Math.ceil(gallons)+" gallon bag filled with helium can probably make 1kg mass bouyant");
```

Let's run it:

```
luchia :: ~/Projects/archimedes-principle ‹master*› » node helium.js
at standard temperature and pressure, a 238 gallon bag filled with helium can probably make 1kg mass bouyant
```
