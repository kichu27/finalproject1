'use client'

import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Welcomeuser from '../components/Welcomeuser';
import Link from 'next/link'
import Image from 'next/image'
import s from "@/app/styles/s.module.css"
import Head from 'next/head';


export default function CoursePage() {


  const [name, setname] = useState("");
  const [array, setarray] = useState([]);
  const [stateD1, setStateD1] = useState([]);
  const [stateD2, setStateD2] = useState([]);
  const [stateD3, setStateD3] = useState([]);
  const [stateD4, setStateD4] = useState([]);

async function checkuser() {

    try {
      const response = await fetch('/api/users/me',{
        method: 'GET',
      });
      
    const {user} = await response.json()

if (user) {
    const Name = user.username; 
    setname(Name)
}
else {
  alert(" no userdata ! ")
}


}
catch (error) {
      console.log("the error from userhome" , error);
    }
  }

  async function popularcourses() {
    try {
      const response = await fetch('/api/users/pc', {
        method: 'GET',
      });

      const rd = await response.json();
      const { courses } = rd;
      setarray(courses);
    } catch (error) {
      console.log(error);
    }
  }


async function getcoursesdata(){

  try {
    const response = await fetch('/api/users/allcourses', {
      method: 'GET',
    });

    const data = await response.json();
   const {d1 , d2 , d3 , d4} = data ; 
   setStateD1(d1)
   setStateD2(d2)
   setStateD3(d3)
   setStateD4(d4)
    
  } catch (error) {
    console.log(error);
  }





}



async function addtofav(value)
{

const response = await fetch('/api/users/atfav' , 
{
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({value}),
});





}




  useEffect(() => {
    checkuser();
    getcoursesdata(); 
    popularcourses();
   

  }, []);

  
 
  
  
  return (
    <div className={s.mdiv}>

<div className={s.head}> <Welcomeuser username={name} className={s.div}/></div>
      

<div className={s.maindiv} >
   
     <div className={s.h}> 
     <h1>POPULAR COURSES</h1> <hr/>
     </div>
    
      
    {array.map((course) =>{

return <div className={s.cdiv} key={course._id}>

<div className={s.cn}>  <h4>{course.courseName}</h4></div>

            <p>DURATION</p>
            <p> {new Date(course.startDate).toLocaleDateString() } - {new Date(course.endDate).toLocaleDateString()} </p>
            <p>{course.subDescription}</p>
            <hr/>       
      
<Image src={"/react.png"} width={50} height={50} alt="React Logo" />

<div className={s.del}> 



<Image src={'/heart.png'} width={20} height={20} alt="Delete Icon" onClick={() =>{ addtofav(course._id);
window.alert("Course Successfully Liked")

}

} />

 
 </div>
 <Link href={`/courses/${course._id}`}>
 <button className={s.button}>Read More </button>
 </Link>
 </div>


        })}
      
</div>

<div className={s.maindiv} >
   
   <div className={s.h}> 
   <h1>APP DEVELOPEMENT</h1> <hr/>
   </div>
 
    
      {stateD3.map((course) =>{

return <div className={s.cdiv} key={course._id}>

<div className={s.cn}>  <h4>{course.courseName}</h4></div>

          <p>DURATION</p>
          <p> {new Date(course.startDate).toLocaleDateString() } - {new Date(course.endDate).toLocaleDateString()} </p>
          <p>{course.subDescription}</p>
          <hr/>
         
<Image src={"/react.png"} width={50} height={50} alt="React Logo" />

<div className={s.del}> 



<Image src={'/heart.png'} width={20} height={20} alt="Delete Icon" onClick={() => addtofav(course._id)} />



 
 </div>

 <Link href={`/courses/${course._id}`}>
                        <button className={s.button}>
                            Read More
                        </button>
                    </Link>

</div>


      })}
    
</div>

<div className={s.maindiv} >
   
   <div className={s.h}> 
   <h1>DATA SCIENCE PYTHON</h1> <hr/>
   </div>
 
    
      {stateD1.map((course) =>{

return <div className={s.cdiv} key={course._id}>

<div className={s.cn}>  <h4>{course.courseName}</h4></div>

          <p>DURATION</p>
          <p> {new Date(course.startDate).toLocaleDateString() } - {new Date(course.endDate).toLocaleDateString()} </p>
          <p>{course.subDescription}</p>
          <hr/>
         
    
<Image src={"/react.png"} width={50} height={50} alt="React Logo" />

<div className={s.del}> 



<Image src={'/heart.png'} width={20} height={20} alt="Delete Icon" onClick={() => addtofav(course._id)} />

 
 </div>

 <Link href={`/courses/${course._id}`}>
                        <button className={s.button}>
                            Read More
                        </button>
                    </Link>

</div>


      })}
    
</div>

<div className={s.maindiv} >
   
   <div className={s.h}> 
   <h1>FULL STACK JAVA</h1> <hr/>
   </div>
 
    
      {stateD2.map((course) =>{

return <div className={s.cdiv} key={course._id}>

<div className={s.cn}>  <h4>{course.courseName}</h4></div>

          <p>DURATION</p>
          <p> {new Date(course.startDate).toLocaleDateString() } - {new Date(course.endDate).toLocaleDateString()} </p>
          <p>{course.subDescription}</p>
          <hr/>
       
    
<Image src={"/react.png"} width={50} height={50} alt="React Logo" />

<div className={s.del}> 



<Image src={'/heart.png'} width={20} height={20} alt="Delete Icon" onClick={() => addtofav(course._id)} />

 
 </div>

 <Link href={`/courses/${course._id}`}>
                        <button className={s.button}>
                            Read More
                        </button>
                    </Link>

</div>


      })}
    
</div>

<div className={s.maindiv} >
   
   <div className={s.h}> 
   <h1>FULL STACK WEB DEVELOPEMENT</h1> <hr/>
   </div>
 
    
      {stateD4.map((course) =>{

return <div className={s.cdiv} key={course._id}>
  <Head>
        <title>Skillsail - Online Courses Platform</title>
        <meta
          name="description"
          content="Explore popular courses, app development, data science, full-stack Java, and web development on Skillsail. Enhance your skills with high-quality courses."
        />
      </Head>

<div className={s.cn}>  <h4>{course.courseName}</h4></div>

          <p>DURATION</p>
          <p> {new Date(course.startDate).toLocaleDateString() } - {new Date(course.endDate).toLocaleDateString()} </p>
          <p>{course.subDescription}</p>
          <hr/>
       
<Image src={"/react.png"} width={50} height={50} alt="React Logo" />

<div className={s.del}> 



<Image src={'/heart.png'} width={20} height={20} alt="Delete Icon" onClick={() => addtofav(course._id)} />

 
 </div>

 <Link href={`/courses/${course._id}`}>
                        <button className={s.button}>
                            Read More
                        </button>
                    </Link>

</div>


      })}
    
</div>

    </div>
  );
}

