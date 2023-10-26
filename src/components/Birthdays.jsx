import styles from "./Birthdays.module.css";

export function Birthdays() {
    const birthdaysList = [
        { date: '2 nov', name: 'Eclesyaste Gomes' },
        { date: '3 nov', name: 'Ana Carolina' },
        { date: '5 nov', name: 'Kevin Henrique' },
        { date: '5 nov', name: 'Maria Ana' },
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