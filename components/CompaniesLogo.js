import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logo = [
  {
    'img': 'https://cube.capriglobal.in/Moratorium_scr/img/cgc_logo_new.png',
  }, 
  {
    'img': 'https://static.wixstatic.com/media/f2e82b_bef0f524a6e449e895760a757cdc5bd7~mv2.png/v1/fill/w_280,h_178,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GHLOGO_edited.png',
  }, 
  {
    'img': 'https://modi-infotech.in/wp-content/uploads/2022/11/fino-logo.jpg  ',
  }, 
  {
    'img': 'https://www.accountingweb.co.uk/sites/default/files/gravita_midnight2x.png',
  }, 
  {
    'img': 'https://hiragroup.com/wp-content/uploads/2013/09/logo.png',
  }, 
  {
    'img': 'https://bl-i.thgim.com/public/markets/rzw0co/article38028170.ece/alternates/FREE_1200/BL24DATA-PATTERNS-LOGO'
  },
  {
    'img': 'https://cube.capriglobal.in/Moratorium_scr/img/cgc_logo_new.png',
  }, 
  {
    'img': 'https://static.wixstatic.com/media/f2e82b_bef0f524a6e449e895760a757cdc5bd7~mv2.png/v1/fill/w_280,h_178,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GHLOGO_edited.png',
  }, 
  {
    'img': 'https://modi-infotech.in/wp-content/uploads/2022/11/fino-logo.jpg  ',
  }, 
  {
    'img': 'https://www.accountingweb.co.uk/sites/default/files/gravita_midnight2x.png',
  }, 
  {
    'img': 'https://hiragroup.com/wp-content/uploads/2013/09/logo.png',
  }, 
  {
    'img': 'https://bl-i.thgim.com/public/markets/rzw0co/article38028170.ece/alternates/FREE_1200/BL24DATA-PATTERNS-LOGO'
  }
]
function CompaniesLogo() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="gap-2  p-2 w-full bg-gray-200 companylogo">
      <Slider {...settings}>
      {logo.map((company, index) => (
        <div className=' w-full ml-[20px]' key={index}>
          <div className='w-[100px] h-full'>
            <img src={company.img} alt="Logo 1" className='w-[100%] h-[100%]' />
          </div>
        </div>
      ))}
      </Slider>

      {/* {logo.map((company, index) => (
        <div className=' w-full ml-[20px]' key={index}>
          <div className='w-[100px] h-full'>
            <img src={company.img} alt="Logo 1" className='w-[100%] h-[100%]' />
          </div>
        </div>
      ))} */}
    </div>

  );
}

export default CompaniesLogo;

