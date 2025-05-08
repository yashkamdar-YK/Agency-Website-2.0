import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const iconTransition = { duration: 0.1, type: "spring", stiffness: 200 };

const AnimeButton = () => {
  return (
    <motion.button
      className="bg-black text-white px-6 py-3 relative overflow-hidden cursor-pointer group rounded-md"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.span
        className="font-bold text-lg relative z-10"
      >
        VOIR PLUS
      </motion.span>
      <motion.div
        className="absolute left-2 z-0"
        variants={{
          rest: { top: 8, bottom: 'auto' },
          hover: { top: 'auto', bottom: 8 },
        }}
        transition={iconTransition}
      >
        <ChevronLeft size={16} />
      </motion.div>
      <motion.div
        className="absolute right-2 z-0"
        variants={{
          rest: { top: 'auto', bottom: 8 },
          hover: { top: 8, bottom: 'auto' },
        }}
        transition={iconTransition}
      >
        <ChevronRight size={16} />
      </motion.div>
    </motion.button>
  );
};

export default AnimeButton;
