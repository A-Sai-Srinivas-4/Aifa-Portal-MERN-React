import React from 'react';
import {GrProjects} from 'react-icons/gr'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <GrProjects />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Transmart',
        path: '/project_details/Transmart',
        icon: <GrProjects />,
        cName: 'sub-nav'
      },
      {
        title: 'IAVR Enterprise',
        path: '/project_details/IAVR Enterprise',
        icon: <GrProjects />,
        cName: 'sub-nav'
      },
      {
        title: 'JJT',
        path: '/project_details/JJT',
        icon: <GrProjects />,
      },
      {
        title: 'PAC',
        path: '/project_details/PAC',
        icon: <GrProjects />,
        cName: 'sub-nav'
      },
      {
        title: 'Genie',
        path: '/project_details/Genie',
        icon: <GrProjects />,
      }
    ]
  },
  {
    title: 'Developers',
    path: '/developers',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];