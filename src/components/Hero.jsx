import { PrimaryButton } from "./PrimaryButton";

import styles from "./Hero.module.css";

export function Hero() {
    // const scrollToSection = (id) => {
    //     const element = document.getElementById(id);
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

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
            <PrimaryButton
                // omclick={() => { scrollToSection('christmas'); }}
                // href={"#christmas"}
                text={"Saiba mais"}
            />
        </div>
    )
}