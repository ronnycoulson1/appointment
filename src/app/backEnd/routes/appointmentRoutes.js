console.log('Appointment routes are being loaded'); // Add this line
const express = require('express');
const router = express.Router();

// Dummy routes for now
router.get('/', (req, res) => res.send('Get all the appointments'));
router.post('/', (req, res) => res.send('Create appointment'));
router.put('/:id', (req, res) =>
  res.send(`Update Appointment with ID ${req.params.id}`)
);
router.delete('/:id', (req, res) =>
  res.send(`Delete appointment with ID ${req.params.id}`)
);

module.exports = router;
