const mongoose = require("mongoose");

const debtSchema = new mongoose.Schema({
  creditor: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

const Debt = mongoose.model("Debt", debtSchema);

module.exports = Debt;
