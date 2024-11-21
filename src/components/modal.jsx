import blogImage from "../assets/img/blogspot";
import { IoCloseCircle } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";

export default function Modal({ blog, onClose }) {
  return (
    <AnimatePresence>
      {blog && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <motion.div
            className="bg-white p-4 rounded-lg w-96 relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <button className="absolute top-2 right-2" onClick={onClose}>
              <IoCloseCircle className="text-cyan-500 text-2xl" />
            </button>
            <div className="mb-4">
              <img
                src={blogImage[blog.id]}
                alt={blog.title}
                className="rounded-lg w-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
              <p className="text-base font-semibold py-2 mb-1">{blog.brand}</p>
              <p className="text-sm mb-1">{blog.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
