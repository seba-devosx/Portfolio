import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { SlSocialLinkedin } from "react-icons/sl";
import { GrGithub } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
const Home = () => {
    
  return (
    <div className='Container-content'>
        <h1 className='title_main'>
            Hi, I am Sebastian
        </h1>
        <h4 className='subtitle_main'>
                <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Im, a Freelance',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Im, a Backend developer',
                1000,
                'Become, a full stack developer',
                1000
            ]}
            wrapper="span"
            speed={35}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
            />
        </h4>
        <ul className='list_icons_social_media'>
            <li className='Element_ul_li'><a className='link' href='https://www.linkedin.com/in/sebastian-aravena-sandoval06/' target="_blank" rel="noreferrer"><SlSocialLinkedin/></a></li>
            <li className='Element_ul_li'><a href='https://github.com/seba-devosx' target="_blank" rel="noreferrer"><GrGithub/></a></li>
            <li className='Element_ul_li'><a href="mailto:sebastianignaaravenasandoval@gmail.com?subject=Subject&body=Body%20Text"><MdOutlineEmail/></a></li>
        </ul>
         
    </div>
  );
};

export default Home;