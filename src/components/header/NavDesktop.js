import { routes } from './Routes';

export const NavDesktop = () => {
  return (
    <ul className='navbar'>
      {routes.map((route) => {
          const { Icon, href, title } = route;
          return (
          <li
              key={route.title}
              className=''
          >
              <a
              href={href}
              className=''
              >
              <Icon className='menu-icon'/>
              {title}
              </a>
          </li>
          );
      })}
    </ul>
  );
};