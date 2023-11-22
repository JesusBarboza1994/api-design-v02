const mongoose = require("mongoose");

export const real_spring_schema = new mongoose.Schema({
  produced_date: { type: Date },
  report_number: { type: String },
  observations: { type: String },
  accordance: { type: Boolean },
  load_control: { type: [{
    load: {type: Number },
    deformation: { type: Number }
  }] },
  dimensions: dimensions
})

export const theoretical_spring_schema = new mongoose.Schema({
  is_selected: { type: Boolean, required: false },
  install_height: { type: Number },
  charg_height: { type: Number },
  max_height: { type: Number },
  optional_height: { type: Number },
  transition_point: { type: Number },
  tolerance_grade: { type: Number }
})

const dimensions = new mongoose.Schema({
  wire: { type: Number, required: true },
  diam_ext: { type: Number, required: true },
  diam_ext2: { type: Number },
  diam_int1: { type: Number },
  diam_int2: { type: Number },
  length: { type: Number, required: true },
  coils: { type: Number, required: true },
  raw_material: { type: String },
  coil_direction: { 
    type: String,
    enum: ['DERECHO', 'IZQUIERDO'],
    default: 'DERECHO'
  },
  terminal1: { 
    type: String,
    enum: ['TASE', 'TCE', 'TAE', 'TCSE'],
    default: 'TASE' 
  },
  luz1: { type: Number },
  coils_red_amp_1: { type: Number },
  detail1_end1: {
    type: String,
    enum: ['LIBRE', 'SOBREPUESTO', ''],
    default: '' 
  },
  detail2_end1: {
    type: String,
    enum: ['A_NIVEL', 'INCLINADO', ''],
    default: ''
  },
  detail3_end1:{
    type: String,
    enum: ['CENTRADO', 'DESCENTRADO', ''],
    default: ''
  }
})