const Customer = require("./model");

async function create_customer(req, res){
  const { name, email, phone, customer_number, document_number } = req.body;
  try {
    const new_customer = new Customer({ name, email, phone, customer_number, document_number });
    await new_customer.save();
    return res.status(201).send({
      code: "CUSTOMER_CREATED",
      message: "Cliente creado",
      data: new_customer
    })
  } catch (error) {
    return res.status(501).send({
      code: "CUSTOMER_CREATION_FAILED",
      message: "Error al crear el cliente"
    })
  }
}

async function update_customer(req, res){
  const data = req.body
  const id = req.params.id
  try {
    const customer = await Customer.findByIdAndUpdate(id, data)
    return res.status(201).send({
      code: "CUSTOMER_UPDATED",
      message: "Cliente actualizado",
      data: customer
    })
  }catch(error){
    return res.status(501).send({
      code: "CUSTOMER_UPDATE_FAILED",
      message: "Error al actualizar el cliente"
    })
  }
}

async function delete_customer(req, res){
  const id = req.params.id
  try {
    const customer = await Customer.findByIdAndDelete(id)
    return res.status(201).send({
      code: "CUSTOMER_DELETED",
      message: "Cliente eliminado",
      data: customer
    })
  }catch(error){
    return res.status(501).send({
      code: "CUSTOMER_DELETE_FAILED",
      message: "Error al eliminar el cliente"
    })
  }
}

export async function update_customer_in_design(data){
  const updated_fields = {};

  for (const [inputField, updateField] of Object.entries(data)) {
    if (value !== undefined && value !== "") updated_fields[inputField] = updateField;
  }

  const customer = await Customer.findOneAndUpdate(
    {  }, 
    {
      $set: updated_fields
    },
    { new: true, upsert: true, runValidators: true }
  );

  return customer;
}

module.exports = {
  create_customer,
  update_customer,
  delete_customer
}
