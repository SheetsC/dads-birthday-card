'use client'
import { motion } from 'framer-motion';
import Cover from './Cover';
import EngineeringBackground from './EngineeringBackground';
import Hobbies from './Hobbies';

function Page() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Cover />
      <EngineeringBackground />
      <Hobbies hobby="grilling" />
      {/* ... other hobbies */}
    </motion.div>
  );
}

export default Page;
