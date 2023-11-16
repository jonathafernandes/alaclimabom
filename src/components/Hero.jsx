import { Info } from "@phosphor-icons/react";
import { PrimaryButton } from "./PrimaryButton";

import styles from "./Hero.module.css";

export function Hero() {
    return (
        <div className={styles.contentHero}>
            <div className={styles.lineDetail}></div>
            <h2>
                Seja bem-vindo(a)!
            </h2>
            <div className={styles.contentText}>
                <p>
                    Aqui você relembra o que rolou durante a semana na Ala Clima Bom.
                </p>
                <br />
                <strong>
                    <Info size={15} />
                    <p>
                        A Ala Clima Bom é uma unidade de A Igreja de Jesus Cristo dos Santos dos Últimos Dias.
                        <br />
                        Quer saber mais sobre a Igreja? Clique no botão abaixo.
                    </p>
                </strong>
            </div>
            <PrimaryButton 
                href={"https://www.vindeacristo.org/?lang=por"}
                text={"Saiba mais"}
            />
        </div>
    )
}