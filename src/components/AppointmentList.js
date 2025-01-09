import React from "react";
import DeleButton from "./DeleteButton";

function AppointmentList({ appointments, deleteAppointment }) {
  return (
    <ul>
      {appointments.map((appt) => (
        <li key={appt.id}>
          <strong>{appt.user}</strong> - {appt.date} at {appt.time} ( {/**display form */}
          {appt.purpose}){" "}
          <DeleButton id={appt.id} deleteAppointment={deleteAppointment}/>
        </li>
      ))}
    </ul>
  );
}

export default AppointmentList;
