import styles from "./Footer.module.css";

import { InstagramLogo, MapPin, Clock } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
    return (
        <div className={styles.footer} id="footer">
            <div className={styles.social}>
                <div>
                    <a target="_blank" href="https://www.instagram.com/alaclimabom" rel="noreferrer noopener">
                        <InstagramLogo size={20} />
                        <p>alaclimabom</p>
                    </a>
                </div>
                <div className={styles.address}>
                    <MapPin size={20} />
                    <p>Rua Santa Luzia, 886 - Tabuleiro do Martins</p>
                </div>
                <div className={styles.address}>
                    <Clock size={20} />
                    <p>Reuniões todos os domingos às 10h20min.</p>
                </div>
            </div>
            <p>&copy; 2023 Todos os direitos reservados.</p>
        </div>
    )
}