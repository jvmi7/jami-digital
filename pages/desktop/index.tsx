import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
function index() {
  return (
    <motion.div key='page2' initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} transition={{ duration: 1 }}>
      Test
      <Link href='/'>go back</Link>
    </motion.div>
  );
}

export default index;
