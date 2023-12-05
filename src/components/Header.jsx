import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';
import { Link as ScrollLink } from 'react-scroll';

import styles from './Header.module.css';
import logo from '../assets/logo.png';
import iconDetail from '../assets/detail.svg';

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

    return (
        <header className={styles.header}>
            <div className={styles.contentDetail}>
                <div className={styles.detail}></div>
                <img className={styles.detailImg} src={iconDetail} alt="" />
            </div>
            <button className={styles.menuButton} onClick={toggleMenu}>
                {isMenuOpen ? <X size={25} /> : <List size={25} />}
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
                            <ScrollLink
                                to="post"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={closeMenu}
                            >
                                Notícias
                            </ScrollLink>
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
