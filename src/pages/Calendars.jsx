import styles from "./Calendars.module.css";

import { Birthdays } from "../components/Birthdays";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Calendars() {
    return (
        <div className={styles.calendarsContent}>
            <Header />
            <div className={styles.birthdays}>
                <h2>Aniversariantes do mês</h2>
                <Birthdays />
            </div>
            <div className={styles.lunch}>
                <h2>Almoço dos missionários</h2>
                <p>Em breve...</p>
            </div>
            <Footer />
        </div>
    )
}