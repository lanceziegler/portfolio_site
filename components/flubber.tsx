// import React from 'react';
// import { useState, useEffect } from 'react';
// import {
//   ReactLogo,
//   NextLogo,
//   TypescriptLogo,
//   NodeLogo,
//   WebpackLogo,
//   MongoLogo,
//   PostgresLogo,
//   TailwindLogo,
//   BootstrapLogo,
//   JestLogo,
// } from './iconExports';
// import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
// import { getIndex, useFlubber } from './use-flubber';

// //! Entire svg is 'path'
// const paths: (() => React.JSX.Element)[] = [
//   ReactLogo,
//   NextLogo,
//   TypescriptLogo,
//   NodeLogo,
//   WebpackLogo,
//   MongoLogo,
//   PostgresLogo,
//   TailwindLogo,
//   BootstrapLogo,
//   JestLogo,
// ];
// const colors = ['blue', 'red'];



// const Flubber = () => {
//   const [pathIndex, setPathIndex] = useState(0);
//   const progress = useMotionValue(pathIndex);

//   useEffect(() => {
//     const animation = animate(progress, pathIndex, {
//       duration: 0.8,
//       ease: "easeInOut",
//       onComplete: () => {
//         if (pathIndex === paths.length - 1) {
//           progress.set(0);
//           setPathIndex(1);
//         } else {
//           setPathIndex(pathIndex + 1);
//         }
//       }
//     });

//     return () => animation.stop();
//   }, [pathIndex]);

//   return (
//     <svg width="800" height="800">
//       <g transform="translate(10 10) scale(17 17)">
//         <motion.path fill={colors[pathIndex]}>
//           {paths}
//         </motion.path>
//       </g>
//     </svg>
//   );
// };

// export default Flubber;
