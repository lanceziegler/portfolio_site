'use client';

import React, { useState, useEffect } from 'react';
import {
  ReactLogo,
  NextLogo,
  TypeScriptLogo,
  NodeLogo,
  WebpackLogo,
  MongoDBLogo,
  PostgreSQLLogo,
  GitLogo,
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
  TypeScriptLogo,
  NodeLogo,
  WebpackLogo,
  MongoDBLogo,
  PostgreSQLLogo,
  GitLogo,
  TailwindLogo,
  BootstrapLogo,
  JestLogo,
];
//@ts-ignore
const LogoCycle = ({ setTech }) => {
  const numComponents = components.length;
  const angleIncrement = (2 * Math.PI) / numComponents;
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentComponent = components[currentIndex];

  const [current, setCurrent] = useState(components[currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % numComponents);
    }, 1000); // Rotate components every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, [numComponents]);

  useEffect(() => {
    setTech(currentComponent.name.slice(0, -4));
  }, [currentComponent.name, setTech]);

  return (
    <div className='scale-50 md:scale-75 lg:scale-100'>
      <div className='carousel-container'>
        {/* Fixed label outside of the carousel */}
        <div className='carousel'>
          <div className='text-3xl font-montserrat bold absolute top-1/2'>
            {currentComponent.name.slice(0, -4)}
          </div>
          {components.map((Component, index) => {
            const angle = index * angleIncrement;
            const transformStyle = `translate(-50%, -50%) rotateY(${angle}rad) translateZ(200px)`;
            return (
              <div
                key={index}
                className={`carousel-ball absolute lg:static ${
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
