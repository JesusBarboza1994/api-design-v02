const mongoose = require("mongoose");

const customer_schema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  customer_number: { type: String }, // No es único porque solo es el código de la tabla de solicitudes de cliente
  document_number: { type: String, required: true, unique: true }
});

const Customer = mongoose.model("Customer", customer_schema);

module.exportes = Customer;