"use client"

import React, { useEffect } from 'react';
import styles from "@/app/success/page.module.css" // Import CSS module
import Link from 'next/link'



const editboughtcourses= async() =>{

try {

const response = await fetch('api/users/boughtcourses' , {

method : "GET" , 

}) 
  
} catch (error) {
  console.log(error);
}




}






const SuccessPage = () => {


useEffect(()=>{

editboughtcourses()


}, [])


  return (
    <div className={styles.container}>
      <div className={styles.successMessage}>
        <h1 className={styles.heading}>Payment Successful!</h1>
        <p className={styles.paragraph}>
          Thank you for your purchase. Your payment was successful.
        </p>
      
        <Link href="/courses">
        <button className={styles.button}>Continue Shopping</button>
        </Link>

        
      </div>
    </div>
  );
};

export default SuccessPage;
