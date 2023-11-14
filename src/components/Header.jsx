import { useState } from 'react';
import styles from './Header.module.css';
import logo from '../assets/logo.png';
import iconDetail from '../assets/detail.svg';
import { Link, useLocation } from 'react-router-dom';
import { List } from '@phosphor-icons/react';

export function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            closeMenu();
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.contentDetail}>
                <div className={styles.detail}></div>
                <img className={styles.detailImg} src={iconDetail} alt="" />
            </div>
            <button className={styles.menuButton} onClick={toggleMenu}>
                <List size={32} />
            </button>
            <nav className={`${styles.navigation} ${isMenuOpen ? styles.showMenu : ''}`}>
                <ul>
                    <li>
                        <Link to="/" onClick={closeMenu}>
                            Página Inicial
                        </Link>
                    </li>
                    {isHomePage && (
                        <li>
                            <a onClick={() => scrollToSection('post')} href="#post" onClick={closeMenu}>
                                Notícias
                            </a>
                        </li>
                    )}
                    <li>
                        <Link to="/calendars" onClick={closeMenu}>
                            Calendários
                        </Link>
                    </li>
                    <li>
                        <Link to="/missionarywork" onClick={closeMenu}>
                            Obra Missionária
                        </Link>
                    </li>
                </ul>
            </nav>
            <Link to="/">
                <img className={styles.logo} src={logo} alt="" />
            </Link>
        </header>
    );
}
