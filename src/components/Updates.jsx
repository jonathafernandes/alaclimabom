import { useEffect, useState } from "react";
import styles from "./Updates.module.css";
import PropTypes from 'prop-types';
import { client } from "../services/prismic";

export function Updates() {
    const [updates, setUpdates] = useState([]);

    async function fecthUpdates() {
        try {
            const response = await client.getAllByType('updates');
            console.log("🚀 ~ fecthUpdates ~ response:", response)
            return response;
        }
        catch (error) {
            console.error('Erro ao buscar notícias', error);
            return [];
        }
    }

    useEffect(() => {
        async function loadUpdates() {
            const updatesData = await fecthUpdates();
            const updatesFormatted = updatesData.map((item) => ({
                id: item.id,
                title: item.data.title,
                image: item.data.image,
                description: item.data.description,
            }));
            setUpdates(updatesFormatted);
        }
        loadUpdates();
    }, []);

    return (
        <div className={styles.content}>
            <h3>Notícias</h3>
            {<ul className={styles.list}>
                {updates.map((updates) => (
                    <li key={updates.id} className={styles.item}>
                        {updates.title.map((titlePiece, index) => (
                            <h4 key={index}>{titlePiece.text}</h4>
                        ))}
                        <img className={styles.img} src={updates.image.url} alt="" />
                        {updates.description.map((descPiece, index) => (
                            <p key={index}>{descPiece.text}</p>
                        ))}
                    </li>
                ))}
            </ul>}
        </div>
    )
}

Updates.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string,
}