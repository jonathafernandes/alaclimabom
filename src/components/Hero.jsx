import styles from "./Hero.module.css";
import { PrimaryButton } from "./PrimaryButton";

export function Hero() {
    return (
        <div className={styles.contentHero}>
            <div className={styles.lineDetail}></div>
            <h2>
                Seja bem-vindo(a)!
            </h2>
            <p>
                Aqui você relembra o que rolou durante a semana na Ala Clima Bom.
                <br />
                A Ala Clima Bom é uma unidade de A Igreja de Jesus Cristo dos Santos dos Últimos Dias.
                <br />
                Quer saber mais sobre a Igreja? Clique no botão abaixo.
            </p>
            <PrimaryButton 
                href={"https://www.vindeacristo.org/?lang=por"}
                text={"Saiba mais"}
            />
        </div>
    )
}