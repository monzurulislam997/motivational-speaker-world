import React from 'react';
import './Count.css'
const Count = (props) => {
    console.log(props)
  const {count}=props
    let totalAmount =0;
    let name =''
    let image=''
    for(const amount of count){
       totalAmount = totalAmount+amount.speakingFee;
       
       image = amount.img;
       name =amount.name;
       
    }
   

    return (
        <div>

                      <h3 className= 'person-number'>Person Choosen:{props.count.length}</h3   >
               <h4 className ='fee' >Speaking fee: ${totalAmount} </h4>  
               <h2 className='person-name' >{name}</h2>
               <img  className='clicked-img' src={image} alt=" " /> 
              
        </div>
    );
};

export default Count;