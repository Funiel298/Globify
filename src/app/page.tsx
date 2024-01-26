'use client'
import Image from 'next/image';
import darkNorway from '../images/dark_norway.jpg'
import Header from '@/components/Header';
import VerticalScroll from '@/components/VerticalScroll';
import CenterParagraphs from '@/components/CenterParagraphs';
import WideParagraphs from '@/components/WideParagrahs';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import { motion } from 'framer-motion';

export default function Home() {



  return (
    <div >
      <Header />
      <div className="relative h-screen overflow-hidden">
        <Image
          src={darkNorway}
          alt="Norway"
          layout="fill"
          objectFit="cover"
          className="opacity-90 z-1 object-top"
          loading="lazy" 
        />
        <div className="absolute text-white top-1/3 transform text-start flex justify-center items-start flex-col p-5">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[12vw] font-bold m-0"
          >
            Norway
          </motion.h1>
          <motion.h6
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-1/2 p-3 m-0"
          >
            Norway, one of the best countries in the world. If you consider only quality of life to live here, I think you will like it.
          </motion.h6>
        </div>
        <VerticalScroll sign={'Play'} />
      </div>

      <div className='flex justify-center'>

      <div className='flex flex-col justify-center items-center'>
        
        <WideParagraphs/>

        <Card/>

        

        <CenterParagraphs name={'General Data'}>
          <div className='grid sm:grid-cols-3 grid-cols-2 sm:w-full w-screen text-[#212427] mb-5' id='cards'>
            <h5>Population: 5.4 million</h5>  
            <h5>GDP: 434 billion USD</h5>  
            <h5>Area: 148,729 sq km</h5>
            <h5>Capital: Oslo</h5>
            <h5>Life Expectancy: 83 years</h5>  
            <h5>Official Language: Norwegian</h5>  
          </div>
        </CenterParagraphs>

        <Footer/>
        </div>
      </div>

      

    </div>
    
  );
}
