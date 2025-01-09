import axios from "axios";

const BASE_URL = "http://localhost:5000/api/appointments";

//fetch all apointments 
export const fetchAppointments = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

//add a new appointment 
export const addAppointment = async(appointmentData) => {
    const respond = await axios.post(BASE_URL, appointmentData);
    return respond.data;
}

//edit an apointment 
export const editAppointment = async(id,updateData) =>{
    const response = await axios.post(`${BASE_URL}/${id}`, updateData);
    return response.data;
};
//delete appointment 
export const deleteAppointment = async (id) =>{
    await axios.delete(`${BASE_URL}/${id}`);
}