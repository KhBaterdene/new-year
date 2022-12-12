import Image from 'next/image';
import clsx from 'clsx';
import NavLink from './NavLink';
import Link from 'next/link';

const Header = ({ goToSlideTwo, scrollTop, scrollData }: any) => {
  const { clientHeight, scroll } = scrollData || {};

  const scrolled = !clientHeight || scroll - clientHeight <= -100;

  const headerHeight = clientHeight - scrollTop;

  return (
    <div className=" relative flex items-stretch h-screen  bg-gradient-to-r from-purple-500 to-pink-500">
      <div
        className={clsx(
          'bg-black overflow-hidden min-w-full flex items-center flex-col fixed z-10 justify-start',
          scrolled && 'clip-triangle'
        )}
        style={{ height: `calc(100vh - ${scrollTop}px)` }}
      >
        <div className="max-w-7xl w-full mx-auto flex justify-around ">
          <NavLink href={'#intro'}>Introduction</NavLink>
          <NavLink href={'/hi'}>Products</NavLink>
          <Link
            href={'/'}
            className="relative block"
            style={{
              width: headerHeight
                ? headerHeight * 0.25 > 100
                  ? headerHeight * 0.3
                  : 100
                : '25%',
              marginTop: headerHeight
                ? headerHeight - scrollTop !== 100
                  ? headerHeight * 0.05
                  : 0
                : '2.5rem',
            }}
          >
            <div className="aspect-w-1 aspect-h-1"></div>
            <Image src="/logo.jpg" alt="logo" fill className="object-cover" />
          </Link>
          <NavLink href={'/hi'}>About</NavLink>
          <NavLink href={'/login'}>login</NavLink>
        </div>
        <h1
          className={clsx(
            'text-white text-5xl font-bold  clip-text bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-in-out',
            clientHeight * 0.4 >= headerHeight && 'opacity-0'
          )}
        >
          Future is now
        </h1>
        <button
          className={clsx(
            'mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-700 hover:to-pink-500  text-white font-bold py-3 px-16 rounded relative z-50 transition-all duration-1000 ease-in-out',
            clientHeight * 0.4 >= headerHeight && 'opacity-0'
          )}
          onClick={goToSlideTwo}
        >
          Start it
        </button>
      </div>
    </div>
  );
};

export default Header;
