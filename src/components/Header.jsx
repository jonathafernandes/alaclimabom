import { PrimaryButton } from "./PrimaryButton";

import styles from "./Header.module.css";

export function Header() {

    return (
        <div className={styles.content}>
            <div>
                <h2>
                    Ala Clima Bom
                </h2>
                <span>
                    Maceió, AL
                </span>
            </div>
            <PrimaryButton
                href={"https://www.vindeacristo.org/crencas"}
                text={"Saiba mais"}
                target={"_blank"}
            />
        </div>
    )
}