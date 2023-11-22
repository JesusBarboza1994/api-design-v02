const mongoose = require("mongoose");

const collaborator = new mongoose.Schema({
  user:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  state: {
    type: String,
    enum: ['DISENO', 'APROBACION', 'VERIFICACION', 'VALIDACION'],
    default: 'DISENO'
  },
  date: { type: Date, required: true },
  conclusion: { type: String },
  comments: { type: String },
  accordance: { type: Boolean },
})

const design_schema = new mongoose.Schema({
  designed_spring: { type: mongoose.Schema.Types.ObjectId, ref: 'DesignedSpring' },
  customer:  { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  car:  { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
  correlative: { type: String, unique: true },
  status: { 
    type: String,
    enum: ['ACEPTADO', 'ANULADO', 'COTIZADO', 'DISENO', 'NO_ACEPTADO', 'VALIDACION', 'VERIFICACION', 'VERIFICADO'],
    default: 'DISENO'
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  development: { 
    type: String,
    enum: ['PROTOTIPO', 'REDISENO', 'MODELO_NUEVO', 'QUEJA', 'SERVICIO'],
    default: 'PROTOTIPO'
  },
  request_reason: { type: String },
  application: { type: String },
  design_type: {
    type: String,
    enum: ['REFORZADO', 'ORIGINAL', 'OTROS', 'GLP', 'GNV(3)', 'GNV(4)', 'GNV(5)', 'BLINDADO', 'PROGRESIVO', 'SEGUN_MUESTRA'],
    default: 'REFORZADO'
  },
  osis_code: { type: String },
  description: { type: String },
  photos: { type: [String] },
  price: { type: Number },
  quantity: { type: Number },
  requirement_order: { type: String },
  production_order_number: { type: String, unique: true },
  drawing: { type: String },
  collaborators: [collaborator],
  correlatives_associated: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Design' }],
})

const Design = mongoose.model('Design', design_schema);

module.exports = Design;