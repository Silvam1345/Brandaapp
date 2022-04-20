const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Schema to describe a vehicle.
 */
let VehicleSchema = new Schema({
  /**
    * the brand name of the vehicle.
    */
  make: {
    type: String
  },
  /**
    * the model name of the vehicle.
    */
  model: {
    type: String
  },
  /**
    * year the vehicle was made.
    */
  model_year: {
    type: Number
  },
  /**
    * miles per gallon/range (for EVs).
    */
  mpg: {
    value: {type: Number},
    unit: {type: String, default: "mi"}
  },
  /**
    * how many miles vehicle has driven total.
    */
  odometer_mi: {
    value: {type: Number},
    unit: {type: String, default: "mi"}
  },
  /**
    * type of engine vehicle uses.
    */
  engine: {
    type: String
  },
  /**
    * vehicle's display name. 
    */
  display_name: {
    type: String
  },
  /**
    * Vehicle's unique alphanumeric identifier.
    */
  vin: {
    type: String
  }
});
let Vehicle = mongoose.model("Vehicle", VehicleSchema);
module.exports = Vehicle;

