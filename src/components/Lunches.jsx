import styles from "./Lunches.module.css";

export function Lunches() {
    const lunches = [
        { date: '1 nov — quarta-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '2 nov — quinta-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '3 nov — sexta-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '4 nov — sábado', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '5 nov — domingo', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '7 nov — terça-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '8 nov — quarta-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '9 nov — quinta-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '10 nov — sexta-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '11 nov — sábado', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '12 nov — domingo', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '14 nov — terça-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '15 nov — quarta-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '16 nov — quinta-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '17 nov — sexta-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '18 nov — sábado', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '19 nov — domingo', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '21 nov — terça-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '22 nov — quarta-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '23 nov — quinta-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '24 nov — sexta-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '25 nov — sábado', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '26 nov — domingo', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '28 nov — terça-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '29 nov — quarta-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
        { date: '30 nov — quinta-feira', name: 'Eclesyaste Gomes', contact: '82 991487903' },
    ];

    return (
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
    )
}