import React from 'react';
import './NavBar.scss';
import logo from '../../assets/logo/k_logo_vertical_b_fondo_transparente.png';
import CardWidget from '../CardWidget/CardWidget';
import {Link} from 'react-router-dom';
const menuItems = [
    {
        id: '1',
        path: '/',
        name: 'Destacados'
    },
    {
        id: '2',
        path: 'category/plasticos',
        name: 'Plasticos'
    },
    {
        id: '3',
        path: 'category/llantas',
        name: 'Llantas'
    },
    {
        id: '4',
        path: 'category/chasis',
        name: 'Chasis'
    }
];

const NavBar = () =>{
    return (
        <nav className='navbar navbar-expand-md navbar-dark'>
            <div className='container-fluid'>
                <Link to = '/' key = '1' className='navbarLogo navbar-brand'>
                    <img src={'https://i.imgur.com/DImCi4l.png'} className='navbarLogo_img' alt='Logo ImperKart' />
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='nav collapse navbar-collapse justify-content-end navi' id='navbarSupportedContent'>
                    <ul className='navbar-nav navi'>
                        {menuItems.map((item) => (
                            <li className='nav-item' key={item.id}>
                                <Link to={item.path} className='nav-link'>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <CardWidget/>         
                </div>
            </div>
        </nav>
    )
}

export default NavBar