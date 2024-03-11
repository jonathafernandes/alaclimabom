import React from "react";
import styles from "./Birthdays.module.css";

export function Birthdays() {
    const birthdaysList = [
        { id: 1, date: '6 mar', name: 'Davi Gabriel' },
        { id: 2, date: '8 mar', name: 'Maria José Lima da Silva' },
        { id: 3, date: '9 mar', name: 'Iris Eslen' },
        { id: 4, date: '11 mar', name: 'Ewerton Chrysostomo' },
        { id: 5, date: '13 mar', name: 'Nayara Felix' },
        { id: 6, date: '13 mar', name: 'Maria Edivânia' },
        { id: 7, date: '15 mar', name: 'Sidineide Felix' },
        { id: 8, date: '15 mar', name: 'Silvaneide Felix' },
        { id: 9, date: '16 mar', name: 'Amara de Andrade' },
        { id: 10, date: '17 mar', name: 'José Davy' },
        { id: 11, date: '19 mar', name: "Maria Caroline" },
        { id: 12, date: '23 mar', name: 'Edinete Azevedo' },
        { id: 13, date: '23 mar', name: 'Miraldo Lopes' },
        { id: 14, date: '23 mar', name: 'Bárbara Kin' }
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
