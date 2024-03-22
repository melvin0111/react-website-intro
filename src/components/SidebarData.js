import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/dashboard/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
      {
        title: 'Orders',
        path: '/dashboard/orders',
        icon: <FaIcons.FaReceipt />,
        cName: 'nav-text'
      },
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <IoIcons.IoMdSettings />,
        cName: 'nav-text'
      }
]