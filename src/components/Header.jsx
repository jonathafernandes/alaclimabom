import styles from "./Header.module.css";
import logo from "../assets/logo.png";
import detail from "../assets/detail.svg";


export function Header() {
    return (
        <>
            <div className={styles.header}>
                <img className={styles.detail} src={detail} alt="" />
                <img className={styles.logo} src={logo} alt="" />
            </div>
            <nav className={styles.subHeader}>
                <ul>
                    <li>
                        <a href="https://noticias-br.aigrejadejesuscristo.org/">
                            Notícias
                        </a>
                    </li>
                    <li>Anúncios</li>
                </ul>
            </nav>
        </>
    )
}