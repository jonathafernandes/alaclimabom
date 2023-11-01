import React from "react";
import styles from "./Birthdays.module.css";

export function Birthdays() {
    const birthdaysList = [
        { id: 1, date: '2 nov', name: 'Eclesyaste Gomes' },
        { id: 2, date: '3 nov', name: 'Ana Carolina' },
        { id: 3, date: '5 nov', name: 'Kevin Henrique' },
        { id: 4, date: '7 nov', name: 'Jonatha Fernandes' },
        { id: 5, date: '9 nov', name: 'Maria Cícera' },
        { id: 6, date: '11 nov', name: 'Fabio da Silva' },
        { id: 7, date: '13 nov', name: 'Cícero Bertolino' },
        { id: 8, date: '13 nov', name: 'Alice Nayara' },
        { id: 9, date: '19 nov', name: 'Helena Santos' },
        { id: 10, date: '23 nov', name: 'Marili Guedes' },
        { id: 11, date: '23 nov', name: 'Soleide Silva' },
        { id: 12, date: '25 nov', name: 'João Pedro' },
        { id: 13, date: '26 nov', name: 'Marcio Antônio' },
        { id: 14, date: '26 nov', name: 'Kajitaisma Oliveira' },
        { id: 15, date: '27 nov', name: 'Anne Caroline' },
        { id: 16, date: '27 nov', name: 'Inácio Ferreira' },
        { id: 17, date: '27 nov', name: 'Nadja Torres' },
    ];

    return (
        <ul className={styles.birthdaysList}>
            {birthdaysList.map((birthday) => (
                <React.Fragment key={birthday.id}>
                    <li>
                        <span className={styles.date}>{birthday.date}</span>
                        {birthday.name}
                    </li>
                    <hr />
                </React.Fragment>
            ))}
        </ul>
    )
}
