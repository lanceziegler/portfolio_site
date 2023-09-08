import React from 'react';

type ProjectTypes = {
  title: string;
  description: string;
  image: string;
  link?: string;
  mt: number;
};

const Project = ({ title, description, link, image, mt }: ProjectTypes) => {
  return (
    <div
      className={`bg-yellow-300 p-10 rounded-2xl sm:w-5/12 mb-4 mx-auto mt-${mt}`}
    >
      <div className='flex flex-col sm:flex-row'>
        <div className='sm:w-7/12 sm:pr-4'>
          <img
            src='your-image-url.jpg'
            alt='Project Image'
            className='max-w-full'
          />
        </div>
        <div className='sm:w-5/12'>
          <h2 className='text-2xl font-bold mb-2'>{title}</h2>
          <p>{description}</p>
          {link && (
            <div>
              <a
                href={link}
                target='_blank'
                type='button'
                className='text-md bg-blue-200 p-2 mt-4 rounded-md hover:translate-x-2 hover:translate-y-1 transition-all'
              >
                Check it out
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
