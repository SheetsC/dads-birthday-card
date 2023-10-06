"use client";
import { useState } from 'react';  // Import useState from react
import { motion } from 'framer-motion';
import Cover from './Cover';
import EngineeringBackground from './EngineeringBackground';
import Hobbies from './Hobbies';
import EndPage from './EndPage';  // Import EndPage component

function Page() {
  // Define a state variable 'activeComponent' with a setter 'setActiveComponent'
  const [activeComponent, setActiveComponent] = useState('Cover');

  // Function to switch between components
  const switchComponent = () => {
    switch (activeComponent) {
      case 'Cover':
        setActiveComponent('EngineeringBackground');
        break;
      case 'EngineeringBackground':
        setActiveComponent('Hobbies');
        break;
      case 'Hobbies':
        setActiveComponent('EndPage');  // Switch to EndPage when current component is Hobbies
        break;
      default:
        setActiveComponent('Cover');
        break;
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* Render the active component based on the value of 'activeComponent' */}
      {activeComponent === 'Cover' && <Cover />}
      {activeComponent === 'EngineeringBackground' && <EngineeringBackground />}
      {activeComponent === 'Hobbies' && <Hobbies hobby="grilling" />}
      {activeComponent === 'EndPage' && <EndPage />}
      {/* ... other hobbies */}
      <button className='text-cyan-500 text-xl'onClick={switchComponent}>
        {activeComponent === 'Hobbies' ? 'Final ->' : 'Next'}
      </button>
    </motion.div>
  );
}

export default Page;


