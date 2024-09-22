import React from "react";
import { motion } from "framer-motion";

type PropeType = {
    children:React.ReactNode
}

function Movingtext({children}:PropeType) {
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
