import { PrimaryButton } from "./PrimaryButton";
// import { Link as ScrollLink } from 'react-scroll';


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
                {/* TO REMEMBER: ainda será usado
                <strong>
                    <Info size={15} />
                    A Ala Clima Bom é uma unidade de A Igreja de Jesus Cristo dos Santos dos Ultimos Dias. Quer saber mais sobre a Igreja? Clique no botão abaixo.
                </strong> */}
            </div>
            <PrimaryButton
                href={"https://www.vindeacristo.org/crencas"}
                text={"Saiba mais"}
                target={"_blank"}
            />  
        </div>
    )
}