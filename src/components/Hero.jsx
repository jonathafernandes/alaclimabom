import { PrimaryButton } from "./PrimaryButton";

import styles from "./Hero.module.css";

export function Hero() {

    return (
        <div className={styles.contentHero}>
            <div className={styles.lineDetail}></div>
            <h2>
                Aprenda sobre Jesus Cristo
            </h2>
            <div className={styles.contentText}>
                <strong>
                    Conheça e siga-O
                </strong>
                <br />
            </div>
            <PrimaryButton
                href={"https://www.vindeacristo.org/crencas"}
                text={"Saiba mais"}
                target={"_blank"}
            />  
        </div>
    )
}