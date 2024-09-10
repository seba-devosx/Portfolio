
import { AiOutlinePython } from "react-icons/ai";
import { SiJavascript,SiPandas,SiDocker,SiSqlalchemy,SiFastapi,SiSelenium} from "react-icons/si";
import { FaGitAlt,FaReact } from "react-icons/fa";

const skillsData = {
    languages: {
      title: 'Lenguajes',
      skills: [
        { icon: <AiOutlinePython className='Icons_list' />, name: 'Python' },
        { icon: <SiJavascript className='Icons_list' />, name: 'JavaScript' },
        
      ],
    },
    frameworks: {
      title: 'Frameworks',
      skills: [
        { icon: <SiFastapi className='Icons_list' />, name: 'FastApi' },
        { icon: <FaReact className='Icons_list' />, name: 'React' },
        { icon: <SiSelenium className='Icons_list' />, name: 'Selenium' },
      ],
    },
    tools: {
      title: 'Herramientas & Librerias',
      skills: [
        { icon: <FaGitAlt className='Icons_list' />, name: 'Git' },
        { icon: <SiDocker className='Icons_list' />, name: 'Docker' },
        { icon: <SiSqlalchemy className='Icons_list' />, name: 'SqlAlchemy' },
        { icon: <SiPandas className='Icons_list' />, name: 'Pandas' },
      ],
    },
  };
  
  export default skillsData;