import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { RiMenu3Line } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-caxer-nav.png';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setClick(!click);
    if (click) {
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { to: '/conocenos', label: 'Conócenos' },
    { to: '/soluciones', label: 'Soluciones' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/postventa', label: 'Post venta' },
    { to: '/contacto', label: 'Contacto' },
  ];

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 transition bg-cyan-500 bg-opacity-70 backdrop-filter backdrop-blur-md">
      <ul className="text-center text-xl p-20">
        {navLinks.map((link) => (
          <li key={link.to} onClick={() => setClick(false)} className="my-8 border-b border-white hover:bg-gray-800 hover:rounded">
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition > 100);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[location.pathname])

  return (
    <nav className={`bg-cyan-500 ${isFixed ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-2 px-8 py-2 relative">
        <div className="flex items-center flex-1">
          <Link to="/">
            <img src={logo} alt="logo" className='pl-4 w-9/12'/>
          </Link>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-14 text-[14px]">
              {navLinks.map((link) => (
                <li
                  key={link.to}
                  onClick={() => setClick(false)}
                  className={`hover:text-slate-500 transition cursor-pointer ${
                    location.pathname === link.to ? 'text-slate-500' : ''
                  }`}
                >
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes size='1.5rem' /> : <RiMenu3Line size='1.5rem'/>}
        </button>
      </div>
    </nav>
  );
}
