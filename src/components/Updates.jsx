import styles from "./Updates.module.css";
import PropTypes from 'prop-types';

export function Updates() {
    const updates = [
        {
            id: 1,
            title: "Notícia 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante nec quam ultricies luctus. Nulla facilisi. Donec id nunc nec or",
            src: "https://via.placeholder.com/150"
        },
    ];

    return (
        <div className={styles.content}>
            {
                updates.length === 0 ? <h4>Sem notícias recentes...</h4> :
                <>
                    <h3>Notícias</h3>
                    {updates.map((news) => (
                        <div key={news.id}>
                            <h3>{news.title}</h3>
                            <img className={styles.img} src={news.src} alt="" />
                            <p>{news.description}</p>
                        </div>
                    ))}
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