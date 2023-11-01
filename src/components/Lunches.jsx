import { DownloadSimple } from "@phosphor-icons/react";
import styles from "./Lunches.module.css";

export function Lunches() {
    const lunches = [
        { date: '1 nov — quarta-feira', name: 'Katialine', contact: '82 993824055' },
        { date: '2 nov — quinta-feira', name: 'Heline', contact: '82 988295470' },
        { date: '3 nov — sexta-feira', name: 'Zilda', contact: '82 987278913' },
        { date: '4 nov — sábado', name: 'Nayara', contact: '82 9384-5202' },
        { date: '5 nov — domingo', name: 'Nayana', contact: '82 994010798' },
        { date: '7 nov — terça-feira', name: 'Severino', contact: '79 988646393' },
        { date: '8 nov — quarta-feira', name: 'Sandra', contact: '82 999621105' },
        { date: '9 nov — quinta-feira', name: 'Amara', contact: '82 999081382' },
        { date: '10 nov — sexta-feira', name: 'Socorro', contact: '82 996927045' },
        { date: '11 nov — sábado', name: 'Caca', contact: '82 999321717' },
        { date: '12 nov — domingo', name: 'Roselene', contact: '82 996624526' },
        { date: '14 nov — terça-feira', name: 'Solange', contact: '82 991382299' },
        { date: '15 nov — quarta-feira', name: 'Klecia', contact: '82 999247578' },
        { date: '16 nov — quinta-feira', name: 'Shirley', contact: '82 991205585' },
        { date: '17 nov — sexta-feira', name: 'Maria do Carmo', contact: '82 993467716' },
        { date: '18 nov — sábado', name: 'Ivandeide', contact: '82 988039615' },
        { date: '19 nov — domingo', name: 'Euridice', contact: '82 988927153' },
        { date: '21 nov — terça-feira', name: 'Edinete', contact: '82 988498524' },
        { date: '22 nov — quarta-feira', name: 'Veridiana', contact: '82 991920345' },
        { date: '23 nov — quinta-feira', name: 'Fábio', contact: '82 993721746' },
        { date: '24 nov — sexta-feira', name: '', contact: '' },
        { date: '25 nov — sábado', name: 'Eunice', contact: '82 987083859' },
        { date: '26 nov — domingo', name: 'Taciana', contact: '82 988412167' },
        { date: '28 nov — terça-feira', name: 'Silvaneide', contact: '82 988305290' },
        { date: '29 nov — quarta-feira', name: 'Cida', contact: '82 988175333' },
        { date: '30 nov — quinta-feira', name: 'Camylla Eugênio', contact: '82 9147-9785' },
    ];

    return (
        <div className={styles.lunches}>
            <ul className={styles.lunchesList}>
                {lunches.map((lunches, index) => (
                <>
                    <li key={index}>
                        <span className={styles.date}>
                            {lunches.date}
                        </span>
                        <strong>
                            {lunches.name}
                        </strong>
                        <span className={styles.contact}>
                            {lunches.contact}
                        </span>
                    </li>
                    <hr />
                </>
                ))}
            </ul>
            <p>Clique no botão abaixo para baixar o caléndario de almoços.</p>
            <a className={styles.button} href="./src/assets/calendar.jpeg" download="calendar.jpeg">
                <span>
                    Download
                </span>
                <DownloadSimple size={20} />
            </a>
        </div>
    )
}