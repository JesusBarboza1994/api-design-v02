const mongoose = require("mongoose");
const { theoretical_spring_schema, real_spring_schema } = require("../schemas");

const requirements = new mongoose.Schema({
  stiffness:{
    condition: { type: String },
    range: { type: String },
  },
  installed_height: {
    condition: { type: String },
    range: { type: String },
  },
  other_requirements: { type: String },
})

const accesories = new mongoose.Schema({
  coil_spacer: { type: String },
  spacer_height: { type: String },
  shockabsorber: {
    solid_height: { type: Number },
    race: { type: Number },
    stem_height: { type: Number },
  }
})

const designed_spring_schema = new mongoose.Schema({
  spring_origin: {
    type: String,
    enum: ['ORIGINAL', 'STOCK_TRANSMETA', 'COMPETENCIA', 'ADAPTADO', 'COILOVER', 'DESCONOCIDO', 'ESPECIAL_TRANSMETA'],
    default: 'ORIGINAL' 
  },
  requirements,
  accesories,
  original_spring: real_spring_schema,
  designed_springs: { type: [theoretical_spring_schema] },
  produced_springs: { type: [real_spring_schema] },
})

const Designed_spring = mongoose.model('DesignedSpring', designed_spring_schema);

module.exports = Designed_spring