import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import iconMissionary from "../assets/missionary.svg"
import styles from "./MissionaryWork.module.css";

export function MissionaryWork() {
    return (
        <div className={styles.content}>
            <Header />
            <main>
                <p><em>Amar, compartilhar, convidar</em> são princípios para ajudá-lo a compartilhar o evangelho de maneira específica com cada um dos filhos de Deus. </p>
                <img className={styles.iconMissionary} src={iconMissionary} alt="" />
            </main>
            <Footer />
        </div>
    )
}