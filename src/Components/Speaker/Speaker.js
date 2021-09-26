import React, { useEffect, useState } from 'react';
import Count from '../Count/Count';
import Person from '../Person/Person';
import './Speaker.css'


const Speaker = () => {
    const[persons, setPersons]=useState([]);
    const [count, setCount]=useState([])
        useEffect(()=>{
            fetch('./fakeData.JSON')
            .then(res =>res.json())
            .then(data =>setPersons(data))
        },[])
      
        const handleAddToCart =person =>{
        
            const newCount =[...count,person]
                        setCount(newCount)
        }
    
    return (  <div className ="speaker-container">
         <div className='person-container'>
         {
              persons.map(person=> <Person person={person} handleAddToCart={handleAddToCart} ></Person>)
          }
          
           </div>
            <div className = "order-container">
               <Count count={count}></Count>
               
            </div>
        </div>
        
    );
};

export default Speaker;