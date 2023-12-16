import React, { useState } from "react";

import { CaretDown, DownloadSimple } from "@phosphor-icons/react";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";

import styles from "./Lunches.module.css";

export function Lunches() {
    const lunches = [
        { id: 1, date: '1 dez — sexta', name: 'Zilda', contact: '82 987278913' },
        { id: 2, date: '2 dez — sábado', name: 'Nayara', contact: '82 9384-5202' },
        { id: 3, date: '3 dez — domingo', name: 'Nayana', contact: '82 994010798' },
        { id: 4, date: '5 dez — terça', name: 'Severino', contact: '79 988646393' },
        { id: 5, date: '6 dez — quarta', name: 'Katialine', contact: '82 993824055' },
        { id: 6, date: '7 dez — quinta', name: 'Heline', contact: '82 988295470' },
        { id: 7, date: '8 dez — sexta', name: 'Socorro', contact: '82 996927045' },
        { id: 8, date: '9 dez — sábado', name: 'Caca', contact: '82 999321717' },
        { id: 9, date: '10 dez — domingo', name: 'Roselene', contact: '82 996624526' },
        { id: 10, date: '12 dez — terça', name: 'Solange', contact: '82 991382299' },
        { id: 11, date: '13 dez — quarta', name: 'Sandra', contact: '82 999621105' },
        { id: 12, date: '14 dez — quinta', name: 'Amara', contact: '82 999081382' },
        { id: 13, date: '15 dez — sexta', name: 'Maria do Carmo', contact: '82 993467716' },
        { id: 14, date: '16 dez — sábado', name: 'Ivandeide', contact: '82 988039615' },
        { id: 15, date: '17 dez — domingo', name: 'Euridice', contact: '82 988927153' },
        { id: 16, date: '19 dez — terça', name: 'Edinete', contact: '82 988498524' },
        { id: 17, date: '20 dez — quarta', name: 'Klecia', contact: '82 999247578' },
        { id: 18, date: '21 dez — quinta', name: 'Shirley', contact: '82 991205585' },
        { id: 19, date: '22 dez — sexta', name: '', contact: '' },
        { id: 20, date: '23 dez — sábado', name: 'Eunice', contact: '82 987083859' },
        { id: 21, date: '24 dez — domingo', name: 'Taciana', contact: '82 988412167' },
        { id: 22, date: '26 dez — terça', name: 'Silvaneide', contact: '82 988305290' },
        { id: 23, date: '27 dez — quarta', name: 'Veridiana', contact: '82 991920345' },
        { id: 24, date: '28 dez — quinta', name: 'Fábio', contact: '82 993721746' },
        { id: 25, date: '29 dez — sexta', name: 'Cida', contact: '82 988175333' },
        { id: 26, date: '30 dez — sábado', name: '', contact: '' },
        { id: 27, date: '31 dez — domingo', name: '', contact: '' },
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
                    target={"_blank"}
                    text={"Download"}
                    icon={<DownloadSimple size={20} />}
                />
            </div>
        </>
    );
}
