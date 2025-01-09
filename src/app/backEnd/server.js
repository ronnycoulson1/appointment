// Import dependencies
const express = require('express'); // Express for routing and server setup
const cors = require('cors'); // CORS to allow cross-origin requests

const app = express(); // Initialize the Express application

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Allow cross-origin requests from the frontend

// In-memory storage for appointments (temporary database)
let appointments = []; // This will hold the appointment data for now

// Routes

// GET all appointments
app.get('/api/appointments', (req, res) => {
  // Respond with the full list of appointments
  res.json(appointments);
});

// POST create a new appointment
app.post('/api/appointments', (req, res) => {
  // Extract details from the request body
  const { user, date, time, purpose } = req.body;

  // Validate that all required fields are provided
  if (!user || !date || !time || !purpose) {
    // Respond with an error if any field is missing
    return res.status(400).json({ message: 'All fields are required!' });
  }

  // Create a new appointment object
  const newAppointment = {
    id: appointments.length + 1, // Assign a unique ID (simple auto-increment logic)
    user,
    date,
    time,
    purpose,
  };

  // Add the new appointment to the in-memory storage
  appointments.push(newAppointment);

    // Log the appointments array to confirm it’s being updated
    console.log('Current Appointments:', appointments);

  // Respond with the newly created appointment
  res.status(201).json(newAppointment);
});

// PUT update an appointment
app.put('/api/appointments/:id', (req, res) => {
  // Extract the appointment ID from the route parameters
  const { id } = req.params;

  // Extract updated details from the request body
  const { user, date, time, purpose } = req.body;

  // Find the appointment in the array
  const appointment = appointments.find((a) => a.id === parseInt(id));

  // If the appointment doesn't exist, respond with an error
  if (!appointment) {
    return res.status(404).json({ message: 'Appointment not found!' });
  }

  // Update the appointment details if provided
  if (user) appointment.user = user;
  if (date) appointment.date = date;
  if (time) appointment.time = time;
  if (purpose) appointment.purpose = purpose;

  // Respond with the updated appointment
  res.json(appointment);
});

// DELETE an appointment
app.delete('/api/appointments/:id', (req, res) => {
  // Extract the appointment ID from the route parameters
  const { id } = req.params;

  // Find the index of the appointment in the array
  const index = appointments.findIndex((a) => a.id === parseInt(id));

  // If the appointment doesn't exist, respond with an error
  if (index === -1) {
    return res.status(404).json({ message: 'Appointment not found!' });
  }

  // Remove the appointment from the array
  const deletedAppointment = appointments.splice(index, 1);

  // Respond with the deleted appointment
  res.json(deletedAppointment);
});

// Default route to test the server
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start the server
const PORT = 5000; // The port the server will listen on
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
