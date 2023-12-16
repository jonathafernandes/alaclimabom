import React from "react";
import styles from "./Birthdays.module.css";

export function Birthdays() {
    const birthdaysList = [
        { id: 1, date: '2 dez', name: 'Maria Gabriela' },
        { id: 2, date: '5 dez', name: 'Maria Jose dos Santos' },
        { id: 3, date: '6 dez', name: 'Jhon Erick' },
        { id: 4, date: '7 dez', name: 'Stephany Brenda' },
        { id: 5, date: '7 dez', name: 'Vitor Gabriel' },
        { id: 6, date: '9 dez', name: 'Maria José da Silva' },
        { id: 7, date: '10 dez', name: 'Nayane Paula' },
        { id: 8, date: '14 dez', name: 'Ubirajara Felix' },
        { id: 9, date: '17 dez', name: 'Marcos Emanoel' },
        { id: 10, date: '17 dez', name: 'Bruno Willian' },
        { id: 11, date: '25 dez', name: "Daher Tutt's" },
        { id: 12, date: '30 dez', name: 'Brenda Sergio' },
        { id: 13, date: '31 dez', name: 'Mayara Monteiro' }
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
