import { AnimatePresence, motion } from "framer-motion";
import React from 'react'

interface ModalProps {
  children: React.ReactNode;
  display?: boolean;
}

const Modal = ({ children, display }: ModalProps) => {
  return (
    display &&
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className=" bg-gray-800 rounded-2xl p-6 max-w-2xl w-full"
          onClick={(e) => e.stopPropagation()}
        >

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='space-y-4'
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Modal

