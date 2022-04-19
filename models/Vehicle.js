const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Schema to describe a vehicle.
 */
let VehicleSchema = new Schema({
  /**
    * Schema to describe a vehicle.
    */
  make: {
    type: String
  },
  /**
    * Schema to describe a vehicle.
    */
  model: {
    type: String
  },
  /**
    * Schema to describe a vehicle.
    */
  model_year: {
    type: Number
  },
  /**
    * Schema to describe a vehicle.
    */
  mpg: {
    type: Number
  },
  /**
    * Schema to describe a vehicle.
    */
  odometer_mi: {
    type: Number
  },
  /**
    * Schema to describe a vehicle.
    */
  engine: {
    type: String
  },
  /**
    * Schema to describe a vehicle.
    */
  display_name: {
    type: String
  },
  /**
    * Schema to describe a vehicle.
    */
  vin: {
    type: String
  }
});
let Vehicle = mongoose.model("Vehicle", VehicleSchema);
module.exports = Vehicle;

