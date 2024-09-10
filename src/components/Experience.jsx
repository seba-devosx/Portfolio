import React from "react";
import ProfileData from "../data/ProfileData.json" 
import { FaTerminal } from "react-icons/fa";
const Experience = () =>{
    return(
      <div Class="timeline">
      {Object.keys(ProfileData.Experience).map((key)=>(
          <div Class="timeline-item">
            <div Class="timeline-icon"></div>
            <div Class="timeline-content">
              <h3 Class="timeline-title"><FaTerminal/>{ProfileData.Experience[key].empresa}</h3>
              <h2 Class="timeline-title">{ProfileData.Experience[key].rol}</h2>
              <span>{ProfileData.Experience[key].tiempo}</span>
              <p>{ProfileData.Experience[key].descripcion}</p>
              <div>
                  <ul>
                  {ProfileData.Experience[key].herramientas.map((herramientas,index)=>(
                    <li key={index}>{herramientas}</li>
                  ))}
                  </ul>
              </div>
            </div>
         </div>
        ))}
    </div>
    );
}
export default Experience