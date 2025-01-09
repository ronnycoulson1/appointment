import "./App.css";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [appointments, setAppointments] = useState([]); // State for storing appointments
  const [formData, setFormData] = useState({
    user: "",
    date: "",
    time: "",
    purpose: "",
  }); // State for form input

  // Fetch appointments from the backend
  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/appointments"); // Backend endpoint
      setAppointments(response.data); // Set response data to state
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  // Add a new appointment
  const addAppointment = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      const response = await axios.post(
        "http://localhost:5000/api/appointments", // Backend endpoint
        formData // Form data
      );
      setAppointments([...appointments, response.data]); // Update appointments state
      setFormData({ user: "", date: "", time: "", purpose: "" }); // Clear form
    } catch (error) {
      console.error("Error adding appointment:", error);
    }
  };

  // Delete an appointment
  const deleteAppointment = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/appointments/${id}`); // Backend endpoint
      setAppointments(appointments.filter((appt) => appt.id !== id)); // Remove from state
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  // Fetch appointments on component mount
  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Appointments</h1>
      {/* Appointment Form */}
      <AppointmentForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={addAppointment}
        editMode={false}
      />

      <hr />

      {/* Appointment List */}
      <AppointmentList
        appointments={appointments}
        deleteAppointment={deleteAppointment}
      />
    </div>
  );
}

export default App;
