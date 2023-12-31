import { PrimaryButton } from "./PrimaryButton";
import { CaretDown } from "@phosphor-icons/react";
import { Link as ScrollLink } from 'react-scroll';


import styles from "./Hero.module.css";

export function Hero() {

    return (
        <div className={styles.contentHero}>
            <div className={styles.lineDetail}></div>
            <h2>
                Celebre o nascimento de Jesus Cristo
            </h2>
            <div className={styles.contentText}>
                <p>
                    Dê mais significado ao Natal
                </p>
                <br />
                {/* TO REMEMBER: ainda será usado
                <strong>
                    <Info size={15} />
                    A Ala Clima Bom é uma unidade de A Igreja de Jesus Cristo dos Santos dos Ultimos Dias. Quer saber mais sobre a Igreja? Clique no botão abaixo.
                </strong> */}
            </div>
            <ScrollLink
                to="christmas"
                spy={true}
                smooth={true}
                duration={500}
            >
                <PrimaryButton
                    href={"#christmas"}
                    text={"Saiba mais"}
                    target={"_self"}
                    icon={<CaretDown size={15} />}
                />  
            </ScrollLink>
        </div>
    )
}