import { PrimaryButton } from "./PrimaryButton";
import { ArrowSquareOut } from "@phosphor-icons/react";

import img from "../assets/light_the_world.webp";
import styles from "./Christmas.module.css";


export function Christmas() {
    return (
        <div className={styles.content} id="christmas">
            <h2>Cristo é o Natal: Comemorar o Nascimento de Jesus</h2>
            <div className={styles.lineDetail}></div>
            <p>Siga o exemplo de Jesus e ame as pessoas ao seu redor, compartilhe a alegria e deixe sua luz brilhar nesta época de Natal.</p>
            <img src={img} alt="" />
            <PrimaryButton
                text={"Seja a luz do mundo servindo"}
                icon={<ArrowSquareOut size={20} />}
                href={"https://www.vindeacristo.org/seja-a-luz-do-mundo"}
                target={"_blank"}
            />
        </div>
    )
}