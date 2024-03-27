import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
      },
      {
        title: 'Orders',
        path: '/dashboard/Orders',
        icon: <FaIcons.FaReceipt />,
        cName: 'nav-text'
      },
      {
        title: 'Settings',
        path: '/dashboard/Settings',
        icon: <IoIcons.IoMdSettings />,
        cName: 'nav-text'
      }
]