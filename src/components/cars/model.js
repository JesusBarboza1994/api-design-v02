const mongoose = require("mongoose");

const wheel = new mongoose.Schema({
  width: { type: Number },
  aspect_ratio: { type: Number },
  diameter: { type: Number },
})

const technical_inspection = new mongoose.Schema({
  front_weight: { type: Number },
  rear_weight: { type: Number },
})

const measures = new mongoose.Schema({
  axis_distance: { type: Number },
  front_axis_to_first_row: { type: Number },
  front_axis_to_center: { type: Number },
  front_axis_to_backspace: { type: Number },
  front_axis_to_second_row: { type: Number },
  front_axis_to_third_row: { type: Number },
  front_left: table_measures,
  front_right: table_measures,
  rear_left: table_measures,
  rear_right: table_measures,
})

const table_measures = new mongoose.Schema({
  p_g: {type: Number},
  ll_g: {type: Number},
  inclination: {type: Number},
  installed_weight: {type: Number},
  weight: {type: [Number]}  
})

const observations = new mongoose.Schema({
  weight_per_person: { type: Number },
  trunk_weight: { type: Number },
  roof_rack_weight: { type: Number },
  additional: { type: String }
})

const bump_test= new mongoose.Schema({
  rear: { type: Number },
  front: { type: Number },
  speed: { type: Number },
  comments: { type: String }
})

const car_schema = new mongoose.Schema({
  vin: { type: String },
  brand: { type: String },
  model: { type: String },
  year: { type: Number },
  fuel: { type: String },
  engine_displacement: { type: Number },
  wheel_drive: { type: String },
  gas_tank: { type: String },
  net_weight: { type: Number },
  gross_weight: { type: Number },
  mileage_km: { type: Number },
  original_wheel: wheel,
  installed_wheel: wheel,
  car_use: { type: String },
  extra_charge: { type: Number },
  technical_inspection,
  measures,
  observations,
  bump_test: {type: [bump_test]},
  hard_braking_test: { type: string },
})

const Car = mongoose.model('User', car_schema);

module.exports = Car;

