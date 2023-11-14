import React from "react";
import styles from "./Goals.module.css";

export function Goals() {
    const goals = [
        {id: 1, text: 'Frequência na Reunião Sacramental', value: '105'},
        {id: 2, text: 'Ordenação de homens ao Sacerdócio de Melquisedeque', value: '05'},
        {id: 3, text: 'Envio de missionários ao campo', value: '02'},
        {id: 4, text: 'Envio de nomes ao Templo', value: '60'},
        {id: 5, text: 'Batismos', value: '10'},
        {id: 6, text: 'Recomendações ao Templo de jovens e adultos ativas', value: '100%'},
    ]

    return (
        <ul className={styles.goalsList}>
        {goals.map((goal) => (
            <React.Fragment key={goal.id}>
                <li>
                    {goal.value}
                    <span className={styles.text}>{goal.text}</span>
                </li>
                <hr />
            </React.Fragment>
        ))}
    </ul>
    )
}