import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectData from '../data/projectData.json'

const Projects=()=>{
    console.log(projectData.Proyectos[0].image)
    return(
        <div className="Container-card">
        {Object.keys(projectData.Proyectos).map((key)=>(
            <Card key={key} className='Card_pj'>
            <Card.Img variant="top" className="Card_img"src={projectData.Proyectos[key].image}/>
            <Card.Body>
                <Card.Title className='Title_card'>{projectData.Proyectos[key].title}</Card.Title>
                <Card.Text className='Text_descrit_card'>
                    {projectData.Proyectos[key].bodyText}
                </Card.Text>
                <div className='Div_span_card'>
                    {projectData.Proyectos[key].tags.map((tags,index)=>(
                        <span key={index} className='Span_card'> {tags} </span>
                    ))}
                </div>
                <div className="Div_btn_card">
                    {projectData.Proyectos[key].links.map((links,index)=>(
                    <Button key={index} className="Btn_card" href={links.href} target='_blank'>{links.text}</Button>
                    ))}
                </div>
                    
            </Card.Body>
            
            </Card>

        ))}
            
        </div>
        
    );
}

export default Projects