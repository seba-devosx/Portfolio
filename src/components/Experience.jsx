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
              <h2 Class="timeline-title">Rol:{ProfileData.Experience[key].rol}</h2>
              <span>{ProfileData.Experience[key].tiempo}</span>
              <p class="Profile-description">{ProfileData.Experience[key].descripcion}</p>
              <br/>
              {/* <div>
                <ul>
                  {ProfileData.Experience[key].herramientas.map((herramientas,index)=>(
                      //console.log(herramientas)
                      <li key={index} className="Profile-list">{herramientas}</li>
                      
                    ))}
                </ul>
              </div> */}
            </div>
         </div>
        ))}
    </div>
    
    );
    
}
export default Experience