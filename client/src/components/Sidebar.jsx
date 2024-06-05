import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SidebarData } from '../Data/Data';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import './Sidebar.css';
import Logo from '../imgs/logo.png';

const Sidebar = () => {
    const location = useLocation();
    const [selected, setSelected] = useState(0);

    // Update the selected index based on the current path
    useEffect(() => {
        const currentPath = location.pathname;
        const activeItem = SidebarData.findIndex(item => item.path === currentPath);
        if (activeItem !== -1) {
            setSelected(activeItem);
        }
    }, [location]);

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
                {SidebarData.map((item, index) => (
                    <div 
                        className={selected === index ? 'menuItem active' : 'menuItem'}
                        key={index}
                        onClick={() => setSelected(index)}
                    >
                        <Link to={item.path} className="link">
                            <item.icon />
                            <span>{item.heading}</span>
                        </Link>
                    </div>
                ))}
                <div className='menuItem'>
                    <UilSignOutAlt />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
