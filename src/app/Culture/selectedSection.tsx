import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center z-20 justify-center overflow-y-scroll bg-[#212427] bg-opacity-50"
          onClick={closeModal}
        >
          <motion.div
            variants={modalVariants}
            className="bg-white p-6 rounded-lg w-[99vw] h-[95vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">{selectedSection.title}</h2>
              <p>{selectedSection.inner_content}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
