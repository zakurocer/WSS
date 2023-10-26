import './cards.css'

import {  motion } from "framer-motion"
import {  useState } from 'react';
import { Link } from 'react-router-dom';
function Cards(props) {

  const [tar, setTar] = useState(0)

  
  return (
    <div className={`card relative justify-self-center md:max-w-md h-96 ${tar === 180 && 'z-10'}`} onMouseEnter={() => setTar(180)} onMouseLeave={() => setTar(0)}>
         <motion.div animate={{rotateY: tar}} className={`bg-indigo-500 rounded-md`}>
            <div className="flex justify-center items-center flex-col p-5 rounded-md">
                {props.imgsrc}
                <p className="text-4xl text-white">{props.title}</p>
                <div className='w-5 h-5 rounded-tl-full bg-slate-300 absolute bottom-0 right-0'></div>
                <div className='w-5 h-5 rounded-tl-full bg-slate-300 absolute bottom-0 right-0 animate-ping'></div>
            </div>
            <div className="flex justify-center items-center flex-col gap-5 px-5">
                <p className='sm:text-xl text-lg text-white'>{props.msg}</p>
                <Link className='bottom-5 text-white text-2xl bg-indigo-300 hover:bg-indigo-600 transition-colors px-5 py-2' to={'/Main-Page'}>{props.btn}</Link>
            </div>
         </motion.div>
    </div>
  );
}

export default Cards;
