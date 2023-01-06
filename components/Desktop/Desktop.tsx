import React from 'react';
import { motion } from 'framer-motion';
function Desktop() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 1 }}>
      Welcome to the Desktop
    </motion.div>
  );
}

export default Desktop;
