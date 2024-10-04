"use client";

import { ChevronUp } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Top() {
  useEffect(() => {
    const handleScroll = () => {
      const topElement = document.getElementById('top');
      if (topElement) {
        topElement.style.display = window.scrollY > 100 ? 'block' : 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div id="top" className="fixed bottom-10 right-10 bg-blue-500 dark:bg-blue-800 p-2 rounded-full shadow-md z-40 text-white cursor-pointer" onClick={scrollToTop} whileHover={{ scale: 1.1 }}>
       <ChevronUp />
    </motion.div>
  )
}

export default Top