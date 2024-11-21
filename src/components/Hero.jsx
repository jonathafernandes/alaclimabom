import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div className={styles.content}>
      <h3>Bem-vindo(a)</h3>
      <p>
        A Ala Clima Bom é uma unidade de A Igreja de Jesus Cristo dos Santos dos Últimos Dias localizada em Maceió, Alagoas. Nossa missão é convidar todos a virem a Cristo.
      </p>
      <div className={styles.information}>
        <div>
          <p className={styles.hour}>
            Reuniões todos os domingos às 10h20min.
            <br />
            Todos são bem-vindos!
          </p>
          <p>
            Rua Santa Luzia, 886
            <br />
            Tabuleiro do Martins
          </p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.104062858413!2d-35.77341382533417!3d-9.586297890499004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x70148f0d7c3c355%3A0xd42bb894221f4fa3!2sR.%20Santa%20Luzia%2C%20886%20-%20Tabuleiro%20do%20Martins%2C%20Macei%C3%B3%20-%20AL%2C%2057060-150!5e0!3m2!1spt-BR!2sbr!4v1731937430495!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}