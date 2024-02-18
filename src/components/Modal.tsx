import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
export default function Modal({ isOpen, onClose, modalVariants, children }: any) {
  const closeModal = () => {
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal"
          initial="initial"
          animate="animate"
          exit="initial"
          variants={modalVariants}
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20 bg-[#212427] bg-opacity-50"
          onClick={closeModal} 
        >
          <motion.div
            variants={modalVariants}
            className="bg-white pt-6 px-6 rounded-xl w-[95vw] h-[95vh] flex overflow-y-auto justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 bg-white rounded-full p-3 hover:rotate-90 duration-300 z-20 cursor-pointer" onClick={closeModal}>
              <AiOutlineClose size={24} color="#333" />
            </div>
            {children} 
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
