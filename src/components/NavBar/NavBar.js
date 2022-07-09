import './NavBar.scss';
import logo from '../../assets/logo/k_logo_vertical_b_fondo_transparente.png';
import CardWidget from '../CardWidget/CardWidget';
import {Link} from 'react-router-dom';
const menuItems = [
    {
        id: 1,
        path: '/',
        name: 'Inicio'
    },
    {
        id: 2,
        path: 'category/productos',
        name: 'Productos'
    },
    {
        id: 3,
        path: 'category/nosotros',
        name: 'Nosotros'
    },
    {
        id: 4,
        path: 'category/contacto',
        name: 'Contacto'
    }
];

const NavBar = () =>{
    return (
        <>
        <nav class='navbar navbar-expand-md navbar-dark'>
            <div class='container-fluid'>
                <Link to = '/' key = '1' class='navbarLogo navbar-brand'>
                    <img src={logo} class='navbarLogo_img' alt='Logo ImperKart' />
                </Link>
                <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div class='nav collapse navbar-collapse justify-content-end navi' id='navbarSupportedContent'>
                    <ul class='navbar-nav navi'>
                        {menuItems.map((item) => (
                            <li class='nav-item'>
                                <Link to={item.path} class='nav-link' key={item.id}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <CardWidget/>          
            </div>
        </nav>
        </>
    )
}

export default NavBar