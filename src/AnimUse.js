import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimUse = () => {
  const animation = useAnimation();

  const sequence = async () => {
    await animation.start({ x: 100 });
    await animation.start({ scale: 1.2 });
    await animation.start({ y: -100 });
    await animation.start({ x: -100 });
    await animation.start({ rotate: 180 });
    await animation.start({ y: 0, x: 0 });
    animation.start({ scale: 1 });
  };

  return (
    <motion.div
      onTap={sequence}
      animate={animation}
      transition={{ duration: 1 }}
      style={{
        width: 150,
        height: 150,
        backgroundColor: '#333',
        borderRadius: 30,
        cursor: 'pointer',
      }}
    ></motion.div>
  );
};

export default AnimUse;
