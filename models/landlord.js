const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const landlordSchema = new Schema({
  Address: { type: String, required: true },
  ShortDesc: { type: String, required: true },
  LongDesc: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Landlord = mongoose.model("Landlord", landlordSchema);

module.exports = Landlord;
