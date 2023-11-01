import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useState } from "react";
import { WhatsappLogo } from "@phosphor-icons/react";

import iconMissionary from "../assets/missionary.svg"
import styles from "./MissionaryWork.module.css";

export function MissionaryWork() {
    const [message, setMessage] = useState('');
    const phoneNumber = '82991487903';

    const handleSendWhatsAppMessage = () => {
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Olá Elderes! Gostaria que vocês conhecessem uma pessoa, se chama ${encodeURIComponent(message)}.`;
        window.open(url);
    };

    return (
        <div className={styles.content}>
            <Header />
            <main>
                <p><em>Amar, compartilhar, convidar</em> são princípios para ajudá-lo a compartilhar o evangelho de maneira específica com cada um dos filhos de Deus. </p>
                <strong>Indique um amigo aos missionários</strong>
                <img className={styles.iconMissionary} src={iconMissionary} alt="" />
                <form>
                    <input
                        type="text"
                        placeholder="Digite o nome da pessoa"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button className={styles.button} onClick={handleSendWhatsAppMessage}>
                        <span>
                            Enviar no WhatsApp
                        </span>
                        <WhatsappLogo size={20} />
                    </button>
                </form>
            </main>
            <Footer />
        </div>
    )
}