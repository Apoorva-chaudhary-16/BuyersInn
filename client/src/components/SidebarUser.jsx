import React, { useState } from 'react'

import { SidebarData } from '../Data/UserData';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import './Sidebar.css';
import Logo from '../imgs/logo.png';
import { Link } from 'react-router-dom';


const SidebarUser = () => {
    const [selected, setSelected] = useState(0);
    // const [expanded, setExpanded] = useState(true);
    return (
        <div className='Sidebar'>
            <div className='logo'>
                <img src={Logo} alt='log' />
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>
            {/* Menu */}

            <div className='menu'>
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected === index ? 'menuItem active' : 'menuItem'}
                            key={index}
                            onClick={() => setSelected(index)}
                        >

                            <Link to={item.path} key={index} className="link">
                                
                                    <item.icon />
                                    <span>{item.heading}</span>
                                 
                            </Link>
                        </div>
                    )
                })}
                <div className='menuItem'>
                    <UilSignOutAlt />
                </div>
            </div>
        </div>
    )
}

export default SidebarUser;