import styles from "./Calendars.module.css";

import { Birthdays } from "../components/Birthdays";
import { Lunches } from "../components/Lunches";

export function Calendars() {
    return (
        <div className={styles.content}>
            <div className={styles.birthdays}>
                <h2>Aniversariantes do mês</h2>
                <Birthdays />
            </div>
            <div className={styles.lunch}>
                <h2>Almoço dos missionários</h2>
                <Lunches />
            </div>
        </div>
    )
}