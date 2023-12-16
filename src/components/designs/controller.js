const { ObjectId } = require("mongodb");
const Design = require("./model");
const Customer = require("../customers/model");
const { update_customer_in_design } = require("../customers/controllers");

async function create_design(req, res){
  const { correlative, design_type } = req.body
  if(!correlative){
    return res.status(400).json({ error: 'Correlativo es obligatorio' });
  }
  if(!design_type){
    return res.status(400).json({ error: 'Subtipo de diseño es obligatorio' });
  }
  const new_design = new Design({
    correlative,
    design_type,
    collaborators:[
      {
        user: new ObjectId(req.user),
        date: Date.now(),
      }
    ]
  })
  await new_design.save()
  res.status(201).json(new_design)
}

async function update_design(req, res){
  const { customer_name: name, customer_email: email, customer_phone: phone, customer_document: document_number, customer_number  } = req.body
  if(name !== "" || email !== "" || phone !== "" || document_number !== "" || customer_number !== ""){
    const customer = update_customer_in_design({ name, email, phone, document_number, customer_number })
  } 

  const 
  {vin, brand, model, year, fuel, engine_displacement, wheel_drive, gas_tank, net_weight, gross_weight, mileage_km, original_wheel, installed_wheel, car_use, extra_charge, technical_inspection, measures, observations, bump_test, hard_braking_test} = req.body
}



async function get_design(req, res){
}

module.exports = {
  create_design,
  update_design,
  get_design
}