import { motion, useAnimation } from 'framer-motion';
import modelPic from './assets/1.jpg';

const ImageTilt = () => {
  const imgAnimation = useAnimation();

  const handleMouseMove = (e) => {
    const { pageX, pageY } = e;
    let xAxis = (window.innerWidth / 2 - pageX) / 25;
    let yAxis = (window.innerHeight / 2 - pageY) / 25;
    imgAnimation.start({
      rotateX: yAxis,
      rotateY: xAxis,
    });
  };

  const handleMouseLeave = () => {
    imgAnimation.start({
      rotateY: 0,
      rotateX: 0,
    });
  };

  return (
    <div
      className='container'
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className='container__image'>
        <motion.img animate={imgAnimation} src={modelPic} alt='model' />
      </div>
    </div>
  );
};

export default ImageTilt;
