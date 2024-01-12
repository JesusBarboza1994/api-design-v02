import Car from "./model";

export async function update_car_in_design(data){
  const updated_fields = {};

  for (const [inputField, updateField] of Object.entries(data)) {
    if (value !== undefined && value !== "") updated_fields[inputField] = updateField;
  }

  const customer = await Car.findOneAndUpdate(
    { customer_number }, 
    {
      $set: updated_fields
    },
    { new: true, upsert: true, runValidators: true }
  );
  console.log("JHEEEE")

  return customer;
}

