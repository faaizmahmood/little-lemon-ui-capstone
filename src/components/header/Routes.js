import {
    FaHome,
    FaDoorClosed,
    FaFileInvoice
} from 'react-icons/fa';
import {
    MdTableRestaurant,
    MdBorderColor,
    MdLogin
} from "react-icons/md";

export const routes = [
    {
      title: 'Home',
      href: '/',
      Icon: FaHome,
    },
    {
      title: 'About',
      href: '/about',
      Icon: FaDoorClosed,
    },
    {
      title: 'Menu',
      href: '/menu',
      Icon: FaFileInvoice,
    },
    {
      title: 'Reservation',
      href: '/reservation',
      Icon: MdTableRestaurant,
    },
    {
        title: 'Order Online',
        href: '/order-online',
        Icon: MdBorderColor,
      },
      {
        title: 'Login',
        href: '/login',
        Icon: MdLogin,
      },
  ];