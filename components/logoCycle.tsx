'use client';

import React, { useState, useEffect } from 'react';
import {
  ReactLogo,
  NextLogo,
  TypescriptLogo,
  NodeLogo,
  WebpackLogo,
  MongoLogo,
  PostgresLogo,
  TailwindLogo,
  BootstrapLogo,
  JestLogo,
} from './iconExports';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  useAnimation,
} from 'framer-motion';
import { getIndex, useFlubber } from './use-flubber';

//! Entire svg is 'path'
const components: (() => React.JSX.Element)[] = [
  ReactLogo,
  NextLogo,
  TypescriptLogo,
  NodeLogo,
  WebpackLogo,
  MongoLogo,
  PostgresLogo,
  TailwindLogo,
  BootstrapLogo,
  JestLogo,
];

const LogoCycle = () => {
  const numComponents = components.length;
  const angleIncrement = (2 * Math.PI) / numComponents;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % numComponents);
    }, 2000); // Rotate components every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, [numComponents]);

  const currentComponent = components[currentIndex];

  return (
    <div className='relative'>
      <div className=''>
        <div className='label absolute top-1/2'>{currentComponent.name}</div>{' '}
      </div>
      <div className='carousel-container'>
        {/* Fixed label outside of the carousel */}
        <div className='carousel'>
          {components.map((Component, index) => {
            const angle = index * angleIncrement;
            const transformStyle = `translate(-50%, -50%) rotateY(${angle}rad) translateZ(200px)`;
            return (
              <div
                key={index}
                className={`carousel-ball ${
                  index === currentIndex ? 'current' : ''
                }`}
                style={{ transform: transformStyle }}
              >
                <Component />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LogoCycle;
