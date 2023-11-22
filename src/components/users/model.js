const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String }, // Almacena el token JWT aquí
  user_type: { 
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
  area:{
    type: String,
    enum: ['ingenieria', 'ventas', 'control_calidad'],
    required: true
  },
  tokenCreatedAt: { type: Date }, // Almacena la fecha de creación del token aquí
  tokenExpiresAt: { type: Date }, // Almacena la fecha de expiración del token aquí
});

const User = mongoose.model('User', user_schema);

module.exports = User;
