import styles from "./Header.module.css";
import logo from "../assets/logo.png";
import detail from "../assets/detail.svg";


export function Header() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className={styles.header}>
                <img className={styles.detail} src={detail} alt="" />
                <img className={styles.logo} src={logo} alt="" />
            </div>
            <nav className={styles.subHeader}>
                <ul>
                    <li>
                        <a onClick={() => scrollToSection('post')}>
                            Notícias
                        </a>
                    </li>
                    <li>
                        <a onClick={() => scrollToSection('footer')}>
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}