import React from 'react'
import '../Car/Car.css'

export default props => (
    <div className="Car">
       <h3>Car name: {props.name}</h3>
       <p> Year: <strong>{props.year}</strong> </p>
       <input  type="text" onClick={props.onChangeName} value={props.name}/>
       <button onClick={props.onDelete}>Deleted</button>
    </div>
) 