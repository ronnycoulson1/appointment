import React from "react";

function AppointmentForm({ formData, setFormData, handleSubmit, editMode }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User"
        value={formData.user}
        onChange={(e) => setFormData({ ...formData, user: e.target.value })}
        required
      />

      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />

      <input
        type="time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        required
      />

      <input
        type="text"
        placeholder="Purpose"
        value={formData.purpose}
        onChange={(e) =>
          setFormData({ ...formData, purpose: e.target.value })
        }
        required
      />

      <button type="submit">
        {editMode ? "Update Appointment" : "Add Appointment"}
      </button>
    </form>
  );
}

export default AppointmentForm;
