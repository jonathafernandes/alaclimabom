import styles from "./Hero.module.css";

export function Hero() {
    return (
        <div className={styles.contentHero}>
            <h2>
                Seja bem-vindo(a)!
            </h2>
            <p>
                Aqui você relembra o que rolou durante a semana na nossa Ala e fica por dentro das notícias da Igreja.
            </p>
        </div>
    )
}