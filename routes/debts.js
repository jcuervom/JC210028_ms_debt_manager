const express = require("express");
const router = express.Router();
const Debt = require("../models/debt");

// Obtener todas las deudas
router.get("/", async (req, res) => {
  try {
    const debts = await Debt.find();
    res.json(debts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Crear una nueva deuda
router.post("/", async (req, res) => {
  const debt = new Debt({
    creditor: req.body.creditor,
    amount: req.body.amount,
    dueDate: req.body.dueDate,
  });

  try {
    const newDebt = await debt.save();
    res.status(201).json(newDebt);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
