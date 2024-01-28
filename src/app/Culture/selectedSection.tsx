import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ScrollCards from "@/components/ScrollCards";

export default function SelectedSection({ selectedSection, setSelectedSection }: any) {
  const modalVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const closeModal = () => {
    setSelectedSection(null);
  };

  const sectionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {selectedSection && (
        <motion.div
          key="modal"
          initial="initial"
          animate="animate"
          exit="initial"
          variants={sectionVariants}
          className="fixed top-0 left-0 right-0 bottom-0 flex  items-center z-20 justify-center bg-[#212427] bg-opacity-50"
          onClick={closeModal}
        >


          <motion.div
            variants={modalVariants}
            className="bg-white pt-6 px-6 rounded-xl  w-[95vw] h-[95vh] flex overflow-y-auto justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="relative w-full h-[80vh] flex flex-col overflow-x-hidden items-center">
              <img
                className="w-full h-full object-cover rounded-xl "
                src={selectedSection.image}
                alt={selectedSection.title}
              />
              <div className="absolute bottom-0 text-center w-full mb-4">
                <h2 className="text-6xl font-semibold text-white">{selectedSection.title}</h2>
                <p className="text-white">{selectedSection.desc}</p>
              </div>

              <p className="w-1/2 my-5 text-start">{selectedSection.inner_content}</p>

              <ScrollCards/>

              <img src="" alt="" />

            </div>
            
          </motion.div>


        </motion.div>
      )}
    </AnimatePresence>
  );
}
