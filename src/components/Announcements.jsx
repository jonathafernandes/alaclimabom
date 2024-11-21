import { client } from "../services/prismic";
import styles from "./Announcements.module.css";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function Announcements() {
    const [announcements, setAnnouncements] = useState([]);

    async function fetchAnnouncements() {
        try {
            const response = await client.getAllByType('announcement');
            return response;
        } catch (error) {
            console.error('Erro ao buscar anúncios', error);
            return [];
        }
    }

    useEffect(() => {
        async function loadAnnouncements() {
            const announcementsData = await fetchAnnouncements();
            const announcementsFormatted = announcementsData.map((item) => ({
                id: item.id,
                tag: item.data.tag,
                date: format(new Date(item.data.date), "dd/MM/yyyy", { locale: ptBR }),
                title: item.data.title,
                description: item.data.description,
            }));
            setAnnouncements(announcementsFormatted);
        }
        loadAnnouncements();
    }, []);

    return (
        <div className={styles.content}>
            <h3>Atividades</h3>
            <ul className={styles.list}>
                {announcements.length === 0 ? (
                    <p>Nenhuma atividade recente</p>
                ) : (
                    announcements.map((item) => (
                        <li key={item.id}>
                            <span className={styles.tag}>
                                {item.tag.map((tagPiece, index) => (
                                    <span key={index}>{tagPiece.text}</span>
                                ))}
                            </span>
                            <strong>{item.date}</strong>
                            {item.title.map((titlePiece, index) => (
                                <h4 key={index}>{titlePiece.text}</h4>
                            ))}
                            {item.description.map((descPiece, index) => (
                                <p key={index}>{descPiece.text}</p>
                            ))}
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}