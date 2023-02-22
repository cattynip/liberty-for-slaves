import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Anchor from './Anchor';

const Header = () => {
  const router = useRouter();

  return null;

  // return (
  //   <header className="sticky top-0 left-0 z-10 w-full bg-black py-3 pl-3">
  //     <div className="flex items-center justify-center space-x-5">
  //       <HeaderItem name="Home" linkTo="/" pathName={router.pathname} />
  //       <HeaderItem
  //         name="About Us"
  //         linkTo="/about"
  //         pathName={router.pathname}
  //       />
  //       <HeaderItem
  //         name="Products"
  //         linkTo="/products"
  //         pathName={router.pathname}
  //       />
  //       <HeaderItem
  //         name="Presentation"
  //         linkTo="/presentation"
  //         pathName={router.pathname}
  //       />
  //     </div>
  //   </header>
  // );
};

interface IHeaderItemProps {
  name: string;
  linkTo: string;
  pathName: string;
}

const HeaderItem = ({ name, linkTo, pathName }: IHeaderItemProps) => {
  const [isMatched, setIsMatched] = useState<boolean>(pathName === linkTo);

  useEffect(() => {
    setIsMatched(pathName === linkTo);
  }, [linkTo, pathName]);

  return (
    <div className="relative inline">
      <div
        className={`px-3 py-0.5 text-lg transition-colors ${
          isMatched ? 'text-black' : 'text-white'
        }`}
      >
        <Anchor href={linkTo}>{name}</Anchor>
      </div>
      <div>
        <AnimatePresence mode="wait">
          {isMatched ? (
            <motion.div
              animate={{
                transition: {
                  delay: 0.2
                }
              }}
              className="absolute top-0 left-0 -z-10 h-full w-full rounded-sm bg-white"
              layoutId="header-item"
            />
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
