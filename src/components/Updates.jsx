import styles from "./Updates.module.css";
import PropTypes from 'prop-types';

export function Updates() {
    const updates = [
        {
            id: 1,
            title: "Exemplo de notícia 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante nec quam ultricies luctus. Nulla facilisi. Donec id nunc nec or",
            src: "https://via.placeholder.com/450x250"
        },
        {
            id: 2,
            title: "Exemplo de notícia 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante nec quam ultricies luctus. Nulla facilisi. Donec id nunc nec or",
            src: "https://via.placeholder.com/450x250"
        },
        {
            id: 3,
            title: "Exemplo de notícia 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante nec quam ultricies luctus. Nulla facilisi. Donec id nunc nec or",
            src: "https://via.placeholder.com/450x250"
        },
        {
            id: 4,
            title: "Exemplo de notícia 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante nec quam ultricies luctus. Nulla facilisi. Donec id nunc nec or",
            src: "https://via.placeholder.com/450x250"
        }
    ];

    return (
        <div className={styles.content}>
            {
                updates.length === 0 ? <h4>Sem notícias recentes...</h4> :
                    <>
                        <h3>Notícias</h3>
                        <div className={styles.list}>
                            {updates.map((updates) => (
                                <div key={updates.id} className={styles.item}>
                                    <h4>{updates.title}</h4>
                                    <img className={styles.img} src={updates.src} alt="" />
                                    <p>{updates.description}</p>
                                </div>
                            ))}
                        </div>
                    </>
            }
        </div>
    )
}

Updates.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string,
}