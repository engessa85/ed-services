import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type PropeType = {
    children:React.ReactNode
}

function Movingtext({children}:PropeType) {
  const textValue = "hi all";
  const rotateValue = Math.floor(Math.random() * 201) - 100;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default Movingtext;
