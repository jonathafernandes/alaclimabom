import styles from "./Hero.module.css";

export function Hero() {
    return (
        <div className={styles.contentHero}>
            <div className={styles.lineDetail}></div>
            <h2>
                Seja bem-vindo(a)!
            </h2>
            <br />
            <p>
                Aqui você relembra o que rolou durante a semana na Ala Clima Bom e fica por dentro das notícias da Igreja.
                <br />
                A Ala Clima Bom é uma unidade de A Igreja de Jesus Cristo dos Santos dos Últimos Dias.
                <br />
                Quer saber mais sobre a Igreja? Clique no botão abaixo.
            </p>
            <a className={styles.button} target="_blank" href="https://www.vindeacristo.org/?lang=por">Saiba mais</a>
        </div>
    )
}