import styles from "./Post.module.css";

import PropTypes from 'prop-types';

import { Ads } from "./Ads";

export function Post(props) {
    return (
        <>
            <h3>NOTÍCIAS RECENTES</h3>
            <div className={styles.content} id="post">
                <header>
                    <span className={styles.date}>08/12 à 07/01 <div className={styles.line}></div></span>
                </header>
                <div className={styles.contentPost}>
                    <section className={styles.news}>
                    </section>
                    
                    <div className={styles.bottom}>
                        <section>
                            <h3>Mensagem para os membros</h3>
                            <span className={styles.tag}>{props.author}</span>
                            <br />
                            <p className={styles.contentMessage}>
                                {props.textContent}
                            </p>
                            <div className={styles.lesson}>
                                <h3>Lição do Quórum de Élderes</h3>
                                <span>Próxima aula: {props.lessonDate}</span>
                                <a href="#" target="_blank" rel="noreferrer">
                                    <div className={styles.contentLesson}>
                                        <img className={styles.lessonImg} src={""} alt="" />
                                        <div>
                                            <p>{props.lessonTitle}</p>
                                            <span>{props.teacher}</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </section>
                        <section>
                            <Ads />
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

Post.propTypes = {
    text1Img: PropTypes.string.isRequired,
    text2Img: PropTypes.string.isRequired,
    text3Img: PropTypes.string.isRequired,
    news1Title: PropTypes.string.isRequired,
    news2Title: PropTypes.string.isRequired,
    news3Title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
    lessonDate: PropTypes.string.isRequired,
    lessonTitle: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
}