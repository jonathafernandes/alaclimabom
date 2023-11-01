import styles from './Header.module.css';
import logo from '../assets/logo.png';
import iconDetail from '../assets/detail.svg';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className={styles.header}>
                <img className={styles.detail} src={iconDetail} alt="" />
                <img className={styles.logo} src={logo} alt="" />
            </div>
            <nav className={styles.subHeader}>
                <ul>
                    <li>
                        <Link to="/">Página Inicial</Link>
                    </li>
                    {isHomePage && (
                        <li>
                            <a onClick={() => scrollToSection('post')}>Notícias</a>
                        </li>
                    )}
                    <li>
                        <Link to="/calendars">Calendários</Link>
                    </li>
                    <li>
                        <Link to="/missionarywork">Obra Missionária</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}