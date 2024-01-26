import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Section {
  title: string;
  content: string;
  image: string;
}

const Culture = () => {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  function openModal(section: Section){
    setSelectedSection(section);

  };

  const closeModal = () => {
    setSelectedSection(null);
  };


  const sectionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  const modalVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const sections: Section[] = [
    { title: 'Traditions', content: 'Norway has a rich cultural heritage with traditional celebrations, festivals, and rituals.', image: '' },
    { title: 'Food', content: 'Norwegian cuisine is known for its seafood, game meats, and traditional dishes like rakfisk and lutefisk.', image: '' },
    { title: 'Language', content: 'The official language is Norwegian. Norwegians are fluent in English, and learning a few phrases in Norwegian is appreciated.', image: '' },
    { title: 'Music', content: 'Traditional Norwegian music includes folk songs, dances, and the distinctive Hardanger fiddle. Modern genres are also popular.', image: ''},
  ];

  return (
    <motion.div
      className="w-screen flex justify-center items-center flex-col bg-[#212427] h-screen overflow-x-hidden"
      initial="initial"
      animate="animate"
    >
      <h1 className="text-3xl font-semibold m-4 mx-5 p-5  flex justify-center  text-white w-screen border-white border-[1px] rounded-xl">Discover Norway's Culture</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {sections.map((section, index) => (
            <motion.div
                key={index}
                variants={sectionVariants} 
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-gray-100 rounded-lg max-w-[33vw] min-h-[33vh] cursor-pointer duration-150"
                onClick={() => openModal(section)}
            >
                <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                <p className="text-gray-600">{section.content}</p>
            </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedSection && (
          <motion.div
            key="modal"
            initial="initial"
            animate="animate"
            exit="initial"
            variants={sectionVariants}
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#212427] bg-opacity-50"
            onClick={closeModal}
          >
            <motion.div variants={modalVariants} className="bg-white p-6 rounded-lg" onClick={(e)=> e.stopPropagation()}>
              <h2 className="text-2xl font-semibold mb-4">{selectedSection.title}</h2>
              <p>{selectedSection.content}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Culture;
