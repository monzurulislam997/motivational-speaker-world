import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Person.css'
const Person = (props) => {
    console.log(props)

    const {name,age,born,speakingFee,country,img}=props.person;
    const element = <FontAwesomeIcon icon={faUser} />

    return (
                <div className ='person-details'>
           <img className='img' src={img} alt="" />
            <h4>Name: {name}</h4> 
             <h5>Age: {age}</h5>
             <h6>Born: {born}</h6>
             <h5>Country: {country}</h5>
            <h5>Fee: ${speakingFee}</h5>
                <button onClick ={()=>props.handleAddToCart(props.person)}> {element }  Add Person  </button>
               
        </div>
    );
};

export default Person;