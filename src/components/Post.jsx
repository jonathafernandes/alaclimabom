import styles from "./Post.module.css";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img5 from "../assets/img5.jpeg";
import PropTypes from 'prop-types';

import { Ads } from "./Ads";

export function Post(props) {
    return (
        <div className={styles.content} id="post">
            <header>
                <span className={styles.date}>12/11 à 11/10 <div className={styles.line}></div></span>
            </header>
            <div className={styles.contentPost}>
                <div className={styles.top}>
                    <section>
                        <h3>
                            {props.news1Title}
                        </h3>
                        <img className={styles.newsImg} src={img1} alt="" />
                        <p>{props.text1Img}</p>
                    </section>
                    <section>
                        <h3>
                            {props.news2Title}
                        </h3>
                        <img className={styles.newsImg} src={img2} alt="" />
                        <p>{props.text2Img}</p>
                    </section>
                </div>
                {/* <div className={styles.top}>
                    <section>
                        <h3>
                            {props.news3Title}
                        </h3>
                        <img className={styles.newsImg} src={img3} alt="" />
                        <p>{props.text3Img}</p>
                    </section>
                    <section>
                        <h3>
                            {props.news4Title}
                        </h3>
                        <img className={styles.newsImg} src={img4} alt="" />
                        <p>{props.text4Img}</p>
                    </section>
                </div> */}
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
                        <a href="https://www.churchofjesuschrist.org/study/general-conference/2023/10/26choi?lang=por" target="_blank" rel="noreferrer">
                            <div className={styles.contentLesson}>
                                <img className={styles.lessonImg} src={img5} alt="" />
                                <div>
                                    <p>{props.lessonTitle}</p>
                                    <span>{props.teacher}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </section>
                <section>
                    < Ads />
                </section>
                </div>
            </div>
        </div>
    )
}

Post.propTypes = {
    text1Img: PropTypes.string.isRequired,
    text2Img: PropTypes.string.isRequired,
    text3Img: PropTypes.string.isRequired,
    text4Img: PropTypes.string.isRequired,
    news1Title: PropTypes.string.isRequired,
    news2Title: PropTypes.string.isRequired,
    news3Title: PropTypes.string.isRequired,
    news4Title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
    lessonDate: PropTypes.string.isRequired,
    lessonTitle: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
}