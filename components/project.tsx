import React from 'react';

type ProjectTypes = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const Project = ({ title, description, image, link }: ProjectTypes) => {
  return (
    <div className='card'>
      <div className='card-content'>
        <h2 className='card-title mb-3 text-2xl'>{title}</h2>
        <p className='card-body mb-3'>{description}</p>
        <a href='#' className='button'>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Project;
