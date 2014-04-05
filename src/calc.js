module.exports = {

  /* Use Archimedes' principle
   * to determine the minimum volume required
   * in order for an object of a given mass and density
   * to achieve bouyancy within a fluid of a given density
   */
  minVolumeForBouyancy: function(options) {
    var fd = options.fluidDensity,
        od = options.objectDensity,
        M = options.mass;
    var V = M / (fd - od);

    return V;
  }
}

