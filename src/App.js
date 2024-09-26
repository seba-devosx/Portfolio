//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import { Routes, Route,useLocation} from 'react-router-dom';
import NavigationBar from './components/Navbar'; // Importa Navbar
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import { useState, useEffect } from 'react';




function App() {
  const location = useLocation()
  const [darkMode, setDarkMode] = useState(false);

  // Cargar la preferencia de tema desde localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  // Guardar la preferencia del tema en localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // Función para alternar entre modo claro y oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        <NavigationBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} /> {/* Muestra Navbar en todas las rutas */}
        <TransitionGroup>
          <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <Routes location={location}>
              <Route path="*" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/Home" element={<Home/>} />
              <Route path="/Skills" element={<Skills/>} />
              <Route path="/Experience" element={<Experience/>} />
              <Route path="/Projects" element={<Projects/>} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
            
      </div>
      
   
  );
}

export default App;