import React from 'react';
import { AiOutlinePython } from "react-icons/ai";
import { TbBrandMysql } from "react-icons/tb";
const Skills = () => {
  return (
    <div className="Container-content">
      <h1 className='Title_skill'>My Skills</h1>
      <p className='Text_skill'>
      Me encanta aprender cosas nuevas y experimentar con nuevas tecnologías.
      Estos son algunos de los principales lenguajes, tecnologías, herramientas y plataformas con los que he trabajado
      </p>
      <ul>
        <li>
        
          <p>Lneguajes</p>
          <ul className='Sub_text_skill'>
            <li>
            <AiOutlinePython />Python
            </li>
            <li>
            <TbBrandMysql />My Sql
            </li>
          </ul>
        </li>

        <li>
          <p>Frameworks</p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;