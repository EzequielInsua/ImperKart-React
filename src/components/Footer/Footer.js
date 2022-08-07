import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.scss';

const Footer = () => {
    return (
        <>
            <div className = 'partners'>
                <div className = 'slider'>
                    <img src='https://i.imgur.com/ztHsxyd.png' alt='BMB'/>
                    <img src='https://i.imgur.com/Zr2bHft.jpg' alt='MVR'/>
                    <img src='https://i.imgur.com/QAbTgab.png' alt='castrol'/>
                    <img src='https://i.imgur.com/WhuQ3Ib.png' alt='catiimoto'/>
                    <img src='https://i.imgur.com/rKXCIRx.png' alt='creuso'/>
                    <img src='https://i.imgur.com/yUulrto.jpg' alt='did'/>
                    <img src='https://i.imgur.com/Tekl2rT.png' alt='hada'/>
                    <img src='https://i.imgur.com/rDhe9Vc.png' alt='izumi'/>
                    <img src='https://i.imgur.com/GDHbTUN.png' alt='jc'/>
                    <img src='https://i.imgur.com/HDrFOIY.png' alt='JET'/>
                    <img src='https://i.imgur.com/TtG9yG9.png' alt='kayak'/>
                    <img src='https://i.imgur.com/R7YS8Cb.png' alt='lazer'/>
                    <img src='https://i.imgur.com/tL28mu6.png' alt='mad'/>
                    <img src='https://i.imgur.com/uuhLXnl.png' alt='motul'/>
                    <img src='https://i.imgur.com/FKB7AWH.png' alt='npr'/>
                    <img src='https://i.imgur.com/WDQmUW1.png' alt='riff'/>
                    <img src='https://i.imgur.com/A7PQGy6.png' alt='w_standard'/>
                    <img src='https://i.imgur.com/ztHsxyd.png' alt='BMB'/>
                    <img src='https://i.imgur.com/Zr2bHft.jpg' alt='MVR'/>
                    <img src='https://i.imgur.com/QAbTgab.png' alt='castrol'/>
                    <img src='https://i.imgur.com/WhuQ3Ib.png' alt='catiimoto'/>
                    <img src='https://i.imgur.com/rKXCIRx.png' alt='creuso'/>
                    <img src='https://i.imgur.com/yUulrto.jpg' alt='did'/>
                    <img src='https://i.imgur.com/Tekl2rT.png' alt='hada'/>
                    <img src='https://i.imgur.com/rDhe9Vc.png' alt='izumi'/>
                    <img src='https://i.imgur.com/GDHbTUN.png' alt='jc'/>
                    <img src='https://i.imgur.com/HDrFOIY.png' alt='JET'/>
                    <img src='https://i.imgur.com/TtG9yG9.png' alt='kayak'/>
                    <img src='https://i.imgur.com/R7YS8Cb.png' alt='lazer'/>
                    <img src='https://i.imgur.com/tL28mu6.png' alt='mad'/>
                    <img src='https://i.imgur.com/uuhLXnl.png' alt='motul'/>
                    <img src='https://i.imgur.com/FKB7AWH.png' alt='npr'/>
                    <img src='https://i.imgur.com/WDQmUW1.png' alt='riffel'/>
                    <img src='https://i.imgur.com/A7PQGy6.png' alt='w_standard'/>
                </div>
            </div>
            <footer>
                <div className="contenedor">
                    <div className="sec contenedor__nosotros">
                        <h2>Quienes Somos</h2>
                        <p>Desde Río Cuarto (Cba), llegamos a clientes de todo el país y estamos muy felices de que nos elijan y de poder ayudarlos en todo lo referido al mundo del karting. Constantemente nos informamos de las tendencias en el mercado, los reglamentos de las provincias y sus requisitos, para poder brindar la mejor atención.</p>
                        <ul className="sci">
                            <li><a className="enlace_rapido" href="https://www.facebook.com/imperkartrioiv" target="_blank"><FacebookIcon className = 'footerIcons' /></a></li>
                            <li><a className="enlace_rapido" href="https://www.instagram.com/imperkart/" target="_blank"><InstagramIcon className = 'footerIcons'/></a></li>
                            <li><a className="enlace_rapido" href="https://wa.me/5493585016265" target="_blank"><WhatsAppIcon className = 'footerIcons'/></a></li>
                        </ul>
                    </div>
                    <div className="sec contenedor__links_utiles">
                        <h2>Enlaces Rápidos</h2>
                        <ul>
                            <li><a href="#">Preguntas Frecuentes</a></li>
                            <li><a href="#">Envíos</a></li>
                            <li><a href="#">Contacto</a></li>
                            <li><a href="#">Garantía y devoluciones</a></li>
                            <li><a href="#">Términos y condiciones</a></li>
                            <li><a href="#">Políticas de privacidad</a></li>
                        </ul>
                    </div>
                    <div className="sec contenedor__contacto">
                        <h2>Información de Contacto</h2>
                        <ul className = "info">
                            <li><LocationOnIcon className = 'footerIcons'/> José Mármol 229, Río Cuarto, Córdoba</li>
                            <li><EmailIcon className = 'footerIcons'/> imperkart@imper.com.ar</li>
                            <li><PhoneEnabledIcon className = 'footerIcons'/> 3585016265</li>
                            <li><a href="https://wa.me/5493585016265" target="_blank"><WhatsAppIcon className = 'footerIcons'/></a>3585016265</li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="footer__creador">
                <p className="footer__diseñador">  Copyright © 2022 <span>IMPERKART</span> | Sitio Creado por 
                    <a href="https://www.linkedin.com/in/ezequiel-insua-analista-de-datos/" target="_blank" className="footer__linke">Ezequiel Insua</a>
                </p>
            </div>

        </>

    )
}
export default Footer;