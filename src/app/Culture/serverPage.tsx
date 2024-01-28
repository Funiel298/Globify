import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SelectedSection from './selectedSection';
import { GrLinkNext } from "react-icons/gr";
import sections from './data';

interface Section {
  title: string;
  outer_content: string;
  inner_content: string;
  desc: string;
  image: string;
}



export default function Culture() {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  function openModal(section: Section){
    setSelectedSection(section);

  };

  const sectionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };


  

  return (
    <motion.div
      className={`w-full flex justify-center items-center flex-col bg-[#212427] ${selectedSection!=null ? 'overflow-auto' : 'overflow-hidden'}`}
      initial="initial"
      animate="animate"
      style={{ height: selectedSection ? '100vh' : 'auto' }}
    >
      <h1 className="text-3xl font-semibold m-4 p-5 w-[95vw]  flex justify-center  text-white  border-white border-[1px] rounded-xl">Discover Norway's Culture</h1>
  
  

      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <motion.div
            key={section.title}
            variants={sectionVariants}
            className="px-5 group hover:bg-[#212427] hover:border-gray-50 border-2 border-[#212427] flex  flex-col justify-center pt-10 bg-gray-100 rounded-lg w-[95vw] h-[40vh] cursor-pointer duration-200"
            onClick={() => openModal(section)}
          >
            <h2 className="text-xl font-semibold p-3 group-hover:text-gray-50 ">{section.title}</h2>
            <div className='flex flex-row md:w-full h-full w-2/3 items-center justify-between '> 
              <p className="text-gray-600 w-1/3 p-3  group-hover:text-gray-300 ">{section.outer_content}</p>
              <img
                className='opacity-0 group-hover:opacity-70 hover:!opacity-100 h-[150%] overflow-hidden duration-200 z-10 object-cover w-1/2 md:w-2/5 '
                src={section.image}
                alt={section.title}
              />
              <button className='text-2xl w-1/5 duration-200 group-hover:text-gray-300 text-[#212427] p-5 flex flex-row items-center group  group-hover:!mr-5'>
                Open
                <GrLinkNext 
                  className='group-hover:ml-3 duration-200' />
              </button>
            </div>
          </motion.div>
        ))}
      </div>


  
      <SelectedSection selectedSection={selectedSection} setSelectedSection={setSelectedSection} /> 
  
    </motion.div>
  );
};

