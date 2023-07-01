import { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { BsCardChecklist, BsFillGridFill } from 'react-icons/bs';
import { RiAppsLine } from 'react-icons/ri';

const mobileNavIcons = [
  {
      icon: <RiAppsLine className="w-8 h-6" />,
      link: '/home'
  },
  {
      icon: <BsFillGridFill className="w-8 h-6" />,
      link: '/grid'
  },
  {
      icon: <AiOutlineHome className="w-8 h-6" />,
      link: '/about'
  },
  {
      icon: <BiMessageDetail className="w-8 h-6" />,
      link: '/chat'
  },
  {
      icon: <BsCardChecklist className="w-8 h-6" />,
      link: '/profile'
  }
]
function MobileNav (){
  const [activeIndex, setActiveIndex] = useState(0);



  // I am using localStorage for tracking the which icon actually user click
  // for showing which component or which tab user visting

  useEffect(() => {
    // Retriving index
    const savedActiveIndex = localStorage.getItem('activeIndex');
    if (savedActiveIndex !== null) {
      setActiveIndex(parseInt(savedActiveIndex));
    }
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    // saving index
    localStorage.setItem('activeIndex', index);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full md:hidden">
      <ul className="fixed bottom-0 flex justify-around  w-full nav-bg p-2 pb-0 shadow-md">
        {mobileNavIcons.map((item, index) => (
          <li
            key={index}
            className={`block md:hidden ${activeIndex === index ? 'text-white nav-menu-active pb-2' : 'text-white pb-2'
              }`}
          >
            <a
              // href={item.link}
              className="flex items-center"
              onClick={() => handleClick(index)}
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
