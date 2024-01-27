import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SelectedSection from './selectedSection';
import { GrLinkNext } from "react-icons/gr";


interface Section {
  title: string;
  outer_content: string;
  inner_content: string;
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


  const sections: Section[] = [
    { 
      title: 'Traditions', 
      outer_content: `
        Norway's natural wonders include the iconic fjords, such as the Geirangerfjord and Nærøyfjord, 
        which are UNESCO World Heritage Sites. 
        `, 
      inner_content: '', 
      image: 'https://images.squarespace-cdn.com/content/v1/65119961b030be2b974e5d94/e859ec0b-9e79-418a-a7a0-bac1bfe2a786/28701577_1646558615420212_5495869544549930426_o.jpg' 
    },

    { 
      title: 'Food', 
      outer_content: `
        Norwegian cuisine is known for its seafood, game meats, and traditional dishes like rakfisk and lutefisk. 
        Norwegian cuisine is heavily influenced by the country's geography and climate. Seafood, including salmon and cod, is a staple. 
        `,  
      inner_content: '', 
      image: 'https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1200,h_800/https://workingwithnorwegians.com/wp-content/uploads/DSC05015-1200x800.jpeg' 
    },
      
    { 
      title: 'Language', 
      outer_content: ` 
        The official language is Norwegian. Norwegians are fluent in English, and learning a few phrases in Norwegian is appreciated
        The Norwegian language has two written forms, Bokmål and Nynorsk, both recognized as official. 
        `, 
      inner_content: '', 
      image: 'https://www.worldatlas.com/r/w1200/upload/95/cf/7d/shutterstock-376573807.jpg' 
    },

    { 
      title: 'Music', 
      outer_content: `
        Traditional Norwegian music includes folk songs, dances, and the distinctive Hardanger fiddle. Modern genres are also popular.
        Traditional Norwegian music often features the Hardanger fiddle, a distinctive and rich-sounding instrument. 
        `, 
      inner_content: '', 
      image: 'https://www.fjordtours.com/media/4199/fn238dhm-foto_terje_rakke.jpg'
    },
  ];

  return (
    <motion.div
      className={`w-full flex justify-center items-center flex-col bg-[#212427] ${selectedSection!=null ? 'overflow-auto' : 'overflow-hidden'}`}
      initial="initial"
      animate="animate"
      style={{ height: selectedSection ? '100vh' : 'auto' }}
    >
      <h1 className="text-3xl font-semibold m-4 mx-5 p-5  flex justify-center  text-white w-screen border-white border-[1px] rounded-xl">Discover Norway's Culture</h1>
  
  

      <div className="flex flex-col gap-4">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={sectionVariants}
            className="px-5 group flex  flex-col justify-center pt-10 bg-gray-100 rounded-lg w-[95vw] h-[40vh] cursor-pointer duration-200"
            onClick={() => openModal(section)}
          >
            <h2 className="text-xl font-semibold p-3 ">{section.title}</h2>
            <div className='flex flex-row md:w-full h-full w-2/3 items-center justify-between '> 
              <p className="text-gray-600 w-1/3 p-3   ">{section.outer_content}</p>
              <img
                className='opacity-0 group-hover:opacity-70 hover:!opacity-100 h-[150%] overflow-hidden duration-200 z-10 object-cover w-1/2 md:w-2/5 '
                src={section.image}
                alt={section.title}
              />
              <button className='text-2xl w-1/5 duration-200 text-[#212427] p-5 flex flex-row items-center group  group-hover:!mr-5'>
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

