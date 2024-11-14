import React, { useState } from "react";

import { CaretDown, DownloadSimple } from "@phosphor-icons/react";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

import styles from "./Lunches.module.css";

export function Lunches() {
    const lunches = [
        { id: 1, date: '1 mar — sexta', name: 'Zilda', contact: '82 987278913' },
        { id: 2, date: '2 mar — sábado', name: 'Nayara', contact: '82 9384-5202' },
        { id: 3, date: '3 mar — domingo', name: 'Nayana', contact: '82 994010798' },
        { id: 4, date: '5 mar — terça', name: 'Severino', contact: '79 988646393' },
        { id: 5, date: '6 mar — quarta', name: 'Katialine', contact: '82 993824055' },
        { id: 6, date: '7 mar — quinta', name: 'Heline', contact: '82 988295470' },
        { id: 7, date: '8 mar — sexta', name: 'Socorro', contact: '82 996927045' },
        { id: 8, date: '9 mar — sábado', name: 'Caca', contact: '82 999321717' },
        { id: 9, date: '10 mar — domingo', name: 'Rosilene', contact: '82 996624526' },
        { id: 10, date: '12 mar — terça', name: 'Camylla', contact: '82 991479785' },
        { id: 11, date: '13 mar — quarta', name: 'Sandra', contact: '82 999621105' },
        { id: 12, date: '14 mar — quinta', name: 'Amara', contact: '82 999081382' },
        { id: 13, date: '15 mar — sexta', name: 'Eunice', contact: '82 987083859' },
        { id: 14, date: '16 mar — sábado', name: 'Ivandeide', contact: '82 988039615' },
        { id: 15, date: '17 mar — domingo', name: 'Edinete', contact: '82 988498524' },
        { id: 16, date: '19 mar — terça', name: 'Edinete', contact: '82 988498524' },
        { id: 17, date: '20 mar — quarta', name: 'Camylla', contact: '82 991479785' },
        { id: 18, date: '21 mar — quinta', name: 'Shirley', contact: '82 991205585' },
        { id: 19, date: '22 mar — sexta', name: 'Veridiana', contact: '82 991920345' },
        { id: 20, date: '23 mar — sábado', name: 'Eunice', contact: '82 987083859' },
        { id: 21, date: '24 mar — domingo', name: 'Taciana', contact: '82 988412167' },
        { id: 22, date: '26 mar — terça', name: 'Cida', contact: '82 988175333' },
        { id: 23, date: '27 mar — quarta', name: 'Veridiana', contact: '82 991920345' },
        { id: 24, date: '28 mar — quinta', name: 'Fábio', contact: '82 993721746' },
        { id: 25, date: '29 mar — sexta', name: 'Clesivan', contact: '82 988123476' },
        { id: 26, date: '30 mar — sábado', name: 'Iran', contact: '82 993956205' },
        { id: 27, date: '31 mar — domingo', name: 'Maria', contact: '82 988426493' },
    ];

    const [visibleCount, setVisibleCount] = useState(10);

    const visibleLunches = lunches.slice(0, visibleCount);

    function showMore() {
        setVisibleCount(visibleCount + 17);
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
                    <SecondaryButton
                        feature={showMore}
                        content={"Mostra tudo"}
                        icon={<CaretDown size={15} />}
                    />
                )}
                <p>Clique no botão abaixo para baixar o calendário de almoços.</p>
                <PrimaryButton
                    href={"./src/assets/lunch-calendar.jpeg"}
                    target={"_blank"}
                    text={"Download"}
                    icon={<DownloadSimple size={20} />}
                />
            </div>
        </>
    );
}
