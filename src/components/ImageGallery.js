import React from 'react';
import Image from 'next/image';

const ImageGallery = () => {
  const data = [
    {
      imgelink: '/images/gallery/EOY.JPG',
      caption: 'Axxela 2023 End of Year Party',
    },
    {
      imgelink: '/images/gallery/EOY 1.JPG',
      caption: 'Axxela 2023 End of Year Party',
    },
    {
      imgelink: '/images/gallery/gastech 3.jpg',
      caption: 'Axxela at the 2023 Gastech Conference, Singapore',
    },
    {
      imgelink: '/images/gallery/gastech 1.jpg',
      caption: 'Axxela at the 2023 Gastech Conference, Singapore',
    },
    {
      imgelink: '/images/gallery/2023 Customer Appreciation Forum 1.JPG',
      caption: '2023 Axxela Customer Appreciation Forum (CAF)',
    },
    {
      imgelink: '/images/gallery/2023 Customer Appreciation Forum 2.JPG',
      caption: '2023 Axxela Customer Appreciation Forum (CAF)',
    },
    {
      imgelink: '/images/gallery/2023 EHSQ Day .JPG',
      caption: 'Axxela Employees at our 2023 EHSQ Day',
    },
    {
      imgelink: '/images/gallery/2023 EHSQ Day 1.JPG',
      caption: 'Axxela Employees at our 2023 EHSQ Day',
    },
    {
      imgelink: '/images/gallery/2023 NAEC Conference .JPG',
      caption:
        'Axxela at the 2023 Association of Energy Correspondents of Nigeria (NAEC) Annual Conference',
    },
    {
      imgelink: '/images/gallery/2023 NGA NAICE Conference 2.jpg',
      caption: 'Axxela at the 2023 Nigeria International Energy Summit (NIES)',
    },
    {
      imgelink: '/images/gallery/ACCI DGGIS 1.jpg',
      caption: '2023 Domestic Gas and Gas Infrastructure Summit (DGGIS)',
    },
    {
      imgelink: '/images/gallery/Andersen visit to Axxela.jpeg',
      caption: 'Andersen Visit to Axxela',
    },
    {
      imgelink: '/images/gallery/Axxela visit to Japan .jpg',
      caption: 'Axxela’s Management Staff visit Japan',
    },
    {
      imgelink: '/images/gallery/Axxela visit to Japan 1 .jpg',
      caption: 'Axxela’s Management Staff visit Japan',
    },
    {
      imgelink: '/images/gallery/COP 2023.jpg',
      caption: 'Axxela at COP28',
    },
    {
      imgelink: '/images/gallery/Ibefun Commissioning 1.JPG',
      caption:
        'Axxela Management Staff with Dignitaries at the Ibefun Natural Gas City Gate Commissioning',
    },
    {
      imgelink: '/images/gallery/Ibefun Commissioning 2.JPG',
      caption:
        'Axxela Management Staff with Dignitaries at the Ibefun Natural Gas City Gate Commissioning',
    },
    {
      imgelink: '/images/gallery/Sojitzs visit to Axxela 3.JPG',
      caption: 'Sojitz Corporation’s visit to Axxela',
    },
    {
      imgelink: '/images/gallery/Visit to Bestaf-MRS Apapa with Sojitz.jpg',
      caption: 'Visit to Bestaf-MRS Apapa with Sojitz',
    },
    {
      imgelink: '/images/gallery/World Quality Day 2023.jpg',
      caption: 'World Quality Day 2023',
    },
    {
      imgelink: '/images/gallery/2023 Customer Appreication Forum .JPG',
      caption: '2023 Axxela Customer Appreciation Forum (CAF)',
    },
    {
      imgelink: '/images/gallery/2023 EHSQ Day 2.JPG',
      caption: 'Axxela Employees at our 2023 EHSQ Day',
    },
  ];

  const [active, setActive] = React.useState({
    imgelink: '/images/gallery/2023 EHSQ Day 2.JPG',
    caption: 'Axxela Employees at our 2023 EHSQ Day',
  });

  return (
    <div className="grid gap-4">
      <div>
        <Image
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active.imgelink}
          alt={active.caption}
          layout="responsive"
          width={800}
          height={600}
        />
        <p className="text-center italic text-base text-dark dark:text-light ">
          {active.caption}
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map(({ imgelink, caption }, index) => (
          <div key={index}>
            <Image
              onClick={() => setActive({ imgelink, caption })}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt={caption}
              width={100}
              height={80}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
