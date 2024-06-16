import React from "react";
import { motion } from 'framer-motion';

interface Props {
  name: string;
  func: ()=>void;
  icon?: React.ReactNode
}

export const Button: React.FC<Props> = ({name,func,icon}) => {
  
  return (
      <motion.button
        whileHover={{ borderColor: '#445B8A', boxShadow: '0 0 5px rgba(68, 91, 138, 0.25)', scale:1.05 }}
        onClick={() => func}
        className={`box rounded-full flex items-center gap-[5px] relative px-[5px] py-[4px] text_small h-fit`}
        >
        <p className='text_small '>{name}</p>
        {icon}
      </motion.button>
  );
};

