import { useClickAway } from 'react-use';
import { useState, useRef } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import { routes } from './Routes';

export const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className='mobile-container'>
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='mobile-menu'
          >
              <ul className=''>
                {routes.map((route, idx) => {
                  const { Icon } = route;

                  return (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                        delay: 0.1 + idx / 10,
                      }}
                      key={route.title}
                      className='test'
                    >
                      <a
                        onClick={() => setOpen((prev) => !prev)}
                        className={
                          ''
                        }
                        href={route.href}
                      >
                        <Icon className='menu-icon' />
                        <span className=''>{route.title}</span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};