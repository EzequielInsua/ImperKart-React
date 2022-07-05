import logo from "../../assets/logo/k_logo_vertical_b_fondo_transparente.png";
import "./NavBar.scss";
import CardWidget from "../CardWidget/CardWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
const menuItems = [
    {
        name: "Inicio",
        id: 1
    },
    {
        name: "Productos",
        id: 2
    },
    {
        name: "Nosotros",
        id: 3
    },
    {
        name: "Contacto",
        id: 4
    }
];

const NavBar = () =>{
    return (
        <>
        <nav class="navbar navbar-expand-md navbar-dark">
            <div class="container-fluid">
                <a class="navbarLogo navbar-brand" href="#">
                    <img src={logo} class="navbarLogo_img" alt="Logo ImperKart" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="nav collapse navbar-collapse justify-content-end navi" id="navbarSupportedContent">
                    <ul class="navbar-nav navi">
                        {menuItems.map((item) => (
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#" key={item.id}>{item.name}</a>
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