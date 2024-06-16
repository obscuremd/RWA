import { Plus } from "iconoir-react/regular";
import { motion } from 'framer-motion';

interface Props {
  name: string;
  func: ()=>void
}

export const AddButton: React.FC<Props> = ({name,func}) => {
  
  return (
      <motion.button
        whileHover={{ borderColor: '#445B8A', boxShadow: '0 0 5px rgba(68, 91, 138, 0.25)', scale:1.05 }}
        onClick={() => func}
        className={`box rounded-full flex items-center gap-[5px] relative px-[5px] py-[4px] text_small`}
        >
          <div className={`box p-1 rounded-full w-fit`} >
          <Plus/>
          </div>
        <p className='text_small mr-[1em]'>{name}</p>
      </motion.button>
  );
};

