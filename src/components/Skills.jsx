import React from 'react';
import skillsData from '../data/SkillData';

const Skills = () => {
  console.log(skillsData.languages); // Debería mostrar el objeto con title y skills para languages.
  console.log(skillsData.languages.skills); // Debería mostrar el array de skills.
  console.log(skillsData.languages.skills[0].icon); // Debería mostrar el primer ícono.
  return (
    <div className="Container-content">
      <h1 className='Title_skill'>Mis Habilidades</h1>
      <p className='Text_skill_description'>
        Me encanta aprender cosas nuevas y experimentar con nuevas tecnologías.
        Estos son algunos de los principales lenguajes, tecnologías, herramientas y plataformas con los que he trabajado:
      </p> 

      {/* Iterando sobre los distintos conjuntos de habilidades */}
      {Object.keys(skillsData).map((key) => (
        <div key={key} className='Container_skill'>
          <h2 className='Lenguaje_title'>{skillsData[key].title}</h2>
          <ul className='List_skills'>
            {skillsData[key].skills.map((skill, index) => (
              <li key={index} className='List_skillsli'>
                {skill.icon}
                <p className='Skill_name'>{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
