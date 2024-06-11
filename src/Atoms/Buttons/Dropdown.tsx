import { motion } from "framer-motion";
import { NavArrowDown } from "iconoir-react";
import { Shared } from "../../assets/Shared";
import styles from "../../assets/Shared.module.css";

interface Props {
  dropdown: boolean;
  setDropdown: (value: boolean) => void;
  data: string[] | React.ReactNode[];
  index: number;
  setIndex: (value: number) => void;
  number?: boolean;
  padding: number;
  truncate?: string;
  dataStyle?: string;
}

const Dropdown: React.FC<Props> = ({ dropdown, setDropdown, data, index, setIndex, number, padding, truncate, dataStyle, }) => {
  
  truncate
  const projects = data;
  
  return (
    <div>
    {/* dropdown */}
    <button
    onClick={() => setDropdown(!dropdown)}
    className={`${styles.box} rounded-full flex items-center md:gap-[20px] gap-[10px] relative md:w-full w-fit`}
    style={{ fontSize: Shared.Text.small, padding: padding }}
    >
    {number && (
      <div className={`${styles.box} md:py-1 md:px-3 px-2 rounded-full w-fit`} >
      {index + 1}
      </div>
    )}
    <p className={` ${dataStyle}`}>{projects[index]}</p>
    <NavArrowDown className="text-[#445B8A]" />
    {/* options */}
    {dropdown && (
      <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`${styles.box} absolute top-[120%] py-3 px-3 rounded-3xl flex flex-col gap-2 backdrop-blur-lg z-10`}
      >
      {projects.map((item, index) => (
        <button
        onClick={() => setIndex(index)}
        className="py-1 px-4 border-[1px] border-[#445b8a74] rounded-full w-[10em] truncate"
        key={index}
        >
        {item}
        </button>
      ))}
      </motion.div>
    )}
    </button>
    </div>
  );
};

export default Dropdown;
