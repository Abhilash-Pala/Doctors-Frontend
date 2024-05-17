import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Docto = () => {
  const[doctors, setDoctors]=useState([]);
  useEffect(()=>{
    //get
    const fetchDoctors=async()=>{
      try{
        const response=await axios.get('https://backendhospital-ji3g.onrender.com/doctors');
        setDoctors(response.data);
      }catch (error){
        console.error('Error fectching doctors:', error);
      }
    };fetchDoctors();
  },[])
  
  return (
    <div>
      <center>
<h2>Doctors</h2>
{
  doctors.map(doctor => (
    <div key={doctor.id}>
      <p><strong>{doctor.name}</strong> - {doctor.speciallization}</p>
      <p>Doctor ID: {doctor.id}</p>
    </div>
  ))
}
      </center>
      
    </div>
  );
};

export default Docto;
