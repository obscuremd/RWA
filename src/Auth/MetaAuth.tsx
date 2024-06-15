import { useEffect, useState } from 'react';
import { Ethlog } from '../utils/EthLog';


const MetaAuth = () => {


  const [metaData, setMetaData] = useState('');

  useEffect(() => {
    Ethlog(setMetaData);
  }, []);

  return (
    <div className='absolute top-0 left-0 z-50 w-full h-screen bg-[#2732487a] backdrop-blur-lg flex justify-center items-center flex-col'>
      <p>{metaData}</p>
    </div>
  )
}

export default MetaAuth