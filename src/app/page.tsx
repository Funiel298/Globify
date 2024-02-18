'use client'
import Image from 'next/image';
import darkNorway from '../images/dark_norway.jpg'
import Header from '@/components/Header';
import VerticalScroll from '@/components/VerticalScroll';
import CenterParagraphs from '@/components/CenterParagraphs';
import WideParagraphs from '@/components/WideParagrahs';
import Cards from '@/components/Cards';
import { motion } from 'framer-motion';
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from 'react';
import Modal from '@/components/Modal';
import ImageCard from '@/components/ImageCard';
import data from '../components/CountriesData.json'

export default function Home() {

  const [counter, setCounter] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const modalVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  
  function ChangeCountry(index:number){
    setCounter(index)
    closeModal()
  }



  return (
    <div>
      <Header />
      <div className="relative h-screen overflow-hidden bg-black">
        <img
          src={data[counter].image}
          alt="Norway"
          className="opacity-70 z-1 object-top object-cover w-full"
        />
        <div className="absolute text-white top-1/3 transform text-start flex justify-center items-start flex-col p-5">

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[12vw] font-bold m-0 p-0 flex items-center group"
          >
            {data[counter].name}
            <IoMdArrowDropdown className='text-[5vw] mt-10 opacity-0 duration-300 group-hover:opacity-70 hover:!opacity-100' onClick={openModal} />
          </motion.h1>


          <motion.h6
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-1/2 p-3 m-0"
          >
            {data[counter].description}
          </motion.h6>

        </div>
        <VerticalScroll sign={'Play'} index={counter} />

        <Modal isOpen={isModalOpen} onClose={closeModal} modalVariants={modalVariants}>
          <div className="p-4 bg-black grid grid-cols-3">
            {data.map((s, index)=>(
              <ImageCard key={index+s.name} s={s} position='col' func={()=>ChangeCountry(index)} />
            ))}
          </div>
        </Modal>
      </div>

      <div className='flex justify-center'>

        <div className='flex flex-col justify-center items-center'>
          
          <WideParagraphs info={data[counter]} />

          <Cards/>

          

          <div className='flex flex-col items-center w-full mt-5'>
          <h1 className='text-2xl font-semibold mb-3'>General Data</h1>
          <div className='grid sm:grid-cols-3 grid-cols-2 w-full text-[#212427] mb-5' id='cards'>
            <div className="flex justify-center flex-col items-center">
              <h5>Population: 5.4 million</h5>  
              <h5>GDP: 434 billion USD</h5>  
            </div>
            <div className="flex justify-center flex-col  items-center">
              <h5>Area: 148,729 sq km</h5>
              <h5>Capital: Oslo</h5>
            </div>
            <div className="flex justify-center flex-col  items-center">
              <h5>Life Expectancy: 83 years</h5>  
              <h5>Official Language: Norwegian</h5>
            </div>
          </div>
        </div>
          <h1 className='font-semibold text-2xl mt-5'>Let's count how many money for travel in norway you need!</h1>
          <a className='p-5 bg-[#212427] text-white rounded-xl ' href="/Finance">Count</a>
        </div>

        

      </div>

      

    </div>
    
  );
}
