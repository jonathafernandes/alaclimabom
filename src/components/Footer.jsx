import styles from "./Footer.module.css";

import { InstagramLogo, MapPin } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.social}>
                <div>
                    <a target="_blank" href="https://www.instagram.com/alaclimabom">
                        <InstagramLogo size={32} />
                        <p>alaclimabom</p>
                    </a>
                </div>
                <div className={styles.address}>
                    <MapPin size={32} />
                    <p>Rua Santa Luzia, 886 - Tabuleiro do Martins</p>
                </div>
            </div>
            <p>&copy; 2023 Todos os direitos reservados.</p>
        </div>
    )
}