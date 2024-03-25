'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import s from "@/app/styles/s.module.css"
export default function Profilepage({ params }) {
  const router = useRouter();
  const [responsedata, setResponsedata] = useState(null);
  const [responsedata1, setResponsedata1] = useState([]);


  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/users/me', { method: 'GET' });
        const data = await response.json();
        const {user} = data 

        setResponsedata(user);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchboughtcourses = async () => {
      try {
        const response = await fetch('/api/users/gbc', { method: 'GET' });
        const data = await response.json();
        const {dota} = data 
        setResponsedata1(dota);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    fetchboughtcourses()
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#41b883', // MongoDB Atlas green
        fontFamily: 'Roboto, sans-serif',
        color: '#fff',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          width: '60%',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          background: '#ffffff', // MongoDB Atlas white
          marginBottom: '20px',
        }}
      >
        <h1
          style={{
            marginBottom: '20px',
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#41b883', // MongoDB Atlas green
          }}
        >
          WELCOME, {responsedata?.username || 'User'}
        </h1>
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '20px',
            color: '#41b883',
          }}
        >
          ID: {responsedata?._id || 'N/A'}
        </p>
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '20px',
            color: '#41b883',
          }}
        >
          Email: {responsedata?.email || 'N/A'}
        </p>
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '10px',
            fontSize: '20px',
            color: '#41b883',
          }}
        >
          Number: {responsedata?.number || 'N/A'}
        </p>
        
        <p>


        </p>
      </div>
      
     
      <div className={s.cdivv}>    
       {responsedata1.map((course) =>{

return <div className={s.ccdiv1}  key={course._id}>
  
  <div className={s.ccdiv} key={course._id}>



<div className={s.ccn}>  <h4>{course.courseName}</h4></div>
<div className={s.ccn}>  <h4>{course. instructor}</h4></div>

</div> </div> 

 })}

 </div>

      
    </div>
  );
  
  
  
  
  
}
