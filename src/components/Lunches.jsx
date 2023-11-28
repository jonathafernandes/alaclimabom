import React, { useState } from "react";

import { CaretDown, DownloadSimple } from "@phosphor-icons/react";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

import styles from "./Lunches.module.css";

export function Lunches() {
    const lunches = [
        { id: 1, date: '1 nov — quarta-feira', name: 'Katialine', contact: '82 993824055' },
        { id: 2, date: '2 nov — quinta-feira', name: 'Heline', contact: '82 988295470' },
        { id: 3, date: '3 nov — sexta-feira', name: 'Zilda', contact: '82 987278913' },
        { id: 4, date: '4 nov — sábado', name: 'Nayara', contact: '82 9384-5202' },
        { id: 5, date: '5 nov — domingo', name: 'Nayana', contact: '82 994010798' },
        { id: 6, date: '7 nov — terça-feira', name: 'Severino', contact: '79 988646393' },
        { id: 7, date: '8 nov — quarta-feira', name: 'Sandra', contact: '82 999621105' },
        { id: 8, date: '9 nov — quinta-feira', name: 'Amara', contact: '82 999081382' },
        { id: 9, date: '10 nov — sexta-feira', name: 'Socorro', contact: '82 996927045' },
        { id: 10, date: '11 nov — sábado', name: 'Caca', contact: '82 999321717' },
        { id: 11, date: '12 nov — domingo', name: 'Roselene', contact: '82 996624526' },
        { id: 12, date: '14 nov — terça-feira', name: 'Solange', contact: '82 991382299' },
        { id: 13, date: '15 nov — quarta-feira', name: 'Klecia', contact: '82 999247578' },
        { id: 14, date: '16 nov — quinta-feira', name: 'Shirley', contact: '82 991205585' },
        { id: 15, date: '17 nov — sexta-feira', name: 'Maria do Carmo', contact: '82 993467716' },
        { id: 16, date: '18 nov — sábado', name: 'Ivandeide', contact: '82 988039615' },
        { id: 17, date: '19 nov — domingo', name: 'Euridice', contact: '82 988927153' },
        { id: 18, date: '21 nov — terça-feira', name: 'Edinete', contact: '82 988498524' },
        { id: 19, date: '22 nov — quarta-feira', name: 'Veridiana', contact: '82 991920345' },
        { id: 20, date: '23 nov — quinta-feira', name: 'Fábio', contact: '82 993721746' },
        { id: 21, date: '24 nov — sexta-feira', name: 'Camylla Eugênio', contact: '82 9147-9785' },
        { id: 22, date: '25 nov — sábado', name: 'Eunice', contact: '82 987083859' },
        { id: 23, date: '26 nov — domingo', name: 'Taciana', contact: '82 988412167' },
        { id: 24, date: '28 nov — terça-feira', name: 'Silvaneide', contact: '82 988305290' },
        { id: 25, date: '29 nov — quarta-feira', name: 'Cida', contact: '82 988175333' },
        { id: 26, date: '30 nov — quinta-feira', name: 'Juliana', contact: '82 988271431' },
    ];

    const [visibleCount, setVisibleCount] = useState(10);

    const visibleLunches = lunches.slice(0, visibleCount);

    function showMore() {
        setVisibleCount(visibleCount + 16);
    }

    return (
        <>
            <div className={styles.lunches}>
                <ul className={styles.lunchesList}>
                    {visibleLunches.map((lunch) => (
                    <React.Fragment key={lunch.id}>
                        <li>
                        <span className={styles.date}>{lunch.date}</span>
                        <strong>{lunch.name}</strong>
                        <span className={styles.contact}>{lunch.contact}</span>
                        </li>
                        <hr />
                    </React.Fragment>
                    ))}
                </ul>
                {visibleCount < lunches.length && (
                    < SecondaryButton
                        feature={showMore}
                        content={"Mostra tudo"}
                        icon={<CaretDown size={15} />}
                    />
                )}
                <p>Clique no botão abaixo para baixar o calendário de almoços.</p>
                <PrimaryButton
                    href={"./src/assets/calendario-almoços.jpeg"}
                    text={"Download"}
                    icon={<DownloadSimple size={20} />}
                />
            </div>
        </>
    );
}
