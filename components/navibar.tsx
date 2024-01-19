"use client"
import { useEffect, useState } from 'react';
import { ModeToggle } from './theme-select';

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>('Home');

  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLDivElement;
      const name = target.getAttribute('data-name') || '';
      setActive(name);
      window.location.href = `/${name.toLowerCase()}`;
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.addEventListener('click', handleClick));

    return () => {
      navItems.forEach(item => item.removeEventListener('click', handleClick));
    }
  }, []);

  return (
    <>
      <nav className="flex justify-between items-center py-2 px-6 relative z-10">
      <div className="text-2xl font-bold cursor-pointer lg:visible invisible" onClick={() => window.location.href = '/home'}>
        INNERIORS
      </div>
        <ul className="flex space-x-10">
          {['Home', 'About', 'Contact'].map((item) => (
            <li key={item} className="nav-item" data-name={item}>
              <div
                className={`cursor-pointer hover:border-b-2 hover:border-blue-500 pb-1 ${active === item ? 'border-b-2 border-blue-500' : ''}`}
              >
                {item}
              </div>
            </li>
          ))}
        </ul>
        <div className="lg:visible invisible">
          <ModeToggle/>
        </div>
      </nav>
    </>
  );

  
};

export default Navbar;
