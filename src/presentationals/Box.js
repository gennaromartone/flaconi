import React from 'react'

const Box = ({value}) => {

    return(
        <div className="box">
            <img width="215" height="251" src={value.image} alt={value.name} className="responsive"></img>
            <strong>{value.name}</strong>
            <div>{value.type}</div>
            <div>{value.price}</div>
            <div>{value.size}</div>
            <div>{value.rating}</div>
        </div>
    )
  
  }

  export default Box;
