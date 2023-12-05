import { SecondaryButton } from "./SecondaryButton";
import { ArrowSquareOut } from "@phosphor-icons/react";

import img from "../assets/light_the_world.webp";
import styles from "./Christmas.module.css";


export function Christmas() {
    return (
        <>
            <h2>Cristo é o Natal: Comemorar o Nascimento de Jesus</h2>
            <div className={styles.lineDetail}></div>
            <p>Siga o exemplo de Jesus e ame as pessoas ao seu redor, compartilhe a alegria e deixe sua luz brilhar nesta época de Natal.</p>
            <img src={img} alt="" />
            <SecondaryButton
                content={"Seja a luz do mundo servindo"}
                icon={<ArrowSquareOut size={20} />}
                src={"https://www.vindeacristo.org/seja-a-luz-do-mundo"}
            />
        </>
    )
}