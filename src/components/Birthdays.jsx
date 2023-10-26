import styles from "./Birthdays.module.css";

export function Birthdays() {
    const birthdaysList = [
        { date: '2 nov', name: 'Eclesyaste Gomes' },
        { date: '3 nov', name: 'Ana Carolina' },
        { date: '5 nov', name: 'Kevin Henrique' },
        { date: '7 nov', name: 'Jonatha Fernandes' },
        { date: '9 nov', name: 'Maria Cícera' },
        { date: '11 nov', name: 'Fabio da Silva' },
        { date: '13 nov', name: 'Cícero Bertolino' },
        { date: '13 nov', name: 'Alice Nayara' },
        { date: '19 nov', name: 'Helena Santos' },
        { date: '23 nov', name: 'Marili Guedes' },
        { date: '23 nov', name: 'Soleide Silva' },
        { date: '25 nov', name: 'João Pedro' },
        { date: '26 nov', name: 'Marcio Antônio' },
        { date: '26 nov', name: 'Kajitaisma Oliveira' },
        { date: '27 nov', name: 'Anne Caroline' },
        { date: '27 nov', name: 'Inácio Ferreira' },
        { date: '27 nov', name: 'Nadja Torres' },
    ];

    return (
        <ul className={styles.birthdaysList}>
            {birthdaysList.map((birthdays, index) => (
            <>
                <li key={index}>
                    <span className={styles.date}>{birthdays.date}</span>
                    {birthdays.name}
                </li>
                <hr />
            </>
        ))}
        </ul>
    )
}