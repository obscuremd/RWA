import { useState } from 'react'
import { Shared } from '../assets/Shared'
import styles from '../assets/Shared.module.css'
import { NavArrowDown } from 'iconoir-react'


interface Transaction {
  icon: JSX.Element;
  name: string;
  date?: string;
  amount: string;
  type?: boolean;
}

interface Props {
  title: string;
  data: Transaction[]; // Use the Transaction type for the data prop
  date: boolean;
}

const List: React.FC<Props> =({title, data, date}) => {

  const transactions = data
  const isMobile = window.innerWidth < 768
  const [active, setActive] = useState(false)

  return (
    <div className={`${styles.box} md:py-7 p-3 md:px-5 rounded-3xl flex flex-col gap-7 w-full`}>
      <div onClick={()=>setActive(!active)} className='flex items-center justify-between'>
        <p style={{fontSize:Shared.Text.large, fontWeight:'bold'}}>{title}</p>
        {isMobile && <NavArrowDown/>}
      </div>
      {/* content */}


      {isMobile && active || !isMobile ?
        transactions && transactions.map((item, index)=>(
        <div key={index} style={{fontSize:Shared.Text.small}} className={`${styles.box} py-2 px-4 rounded-xl flex justify-between w-full items-center`}>
          <div className={`${styles.box} p-2 rounded-full inline-flex justify-center`}>{item.icon}</div>
          <p>{item.name}</p>
          {date && <p className='opacity-50'>{item.date}</p>}
          <p style={{color:item.type?'#C2E7B1':'#A13334'}}>{item.amount}</p>
        </div>
      )):null}
    </div>
  )
}

export default List
