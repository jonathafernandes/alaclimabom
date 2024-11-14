import styles from "./News.module.css";
import PropTypes from 'prop-types';

export function News() {
    const news = [
        
    ];

    return (
        <div className={styles.content}>
            {
                news.length === 0 ? <h4>Sem notícias recentes...</h4> :
                <>
                    <h3>Notícias</h3>
                    {news.map((news) => (
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

News.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string,
}