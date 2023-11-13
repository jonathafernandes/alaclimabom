import styles from "./Post.module.css";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import PropTypes from 'prop-types';

import { SecondaryButton } from "./SecondaryButton";
import { Ads } from "./Ads";

export function Post(props) {
    return (
        <div className={styles.content} id="post">
            <header>
                <span className={styles.date}>16/10 à 29/10 <div className={styles.line}></div></span>
            </header>
            <div className={styles.contentPost}>
                <div className={styles.top}>
                    <section>
                        <h3>
                            {props.news1Title}
                        </h3>
                        <img src={img1} alt="" />
                        <p>{props.text1Img}</p>
                    </section>
                    <section>
                        <h3>
                            {props.news2Title}
                        </h3>
                        <img src={img2} alt="" />
                        <p>{props.text2Img}</p>
                    </section>
                </div>
                <div className={styles.top}>
                    <section>
                        <h3>
                            {props.news3Title}
                        </h3>
                        <img src={img3} alt="" />
                        <p>{props.text3Img}</p>
                    </section>
                    <section>
                        <h3>
                            {props.news4Title}
                        </h3>
                        <img src={img4} alt="" />
                        <p>{props.text4Img}</p>
                    </section>
                </div>
                <div className={styles.bottom}>
                <section>
                    <h3>
                        {props.section3Title}
                    </h3>
                    <span className={styles.tag}>{props.author}</span>
                    <br />
                    <p className={styles.contentMessage}>
                        {props.textContent}
                        <br />
                        <SecondaryButton
                            src={"https://www.youtube.com/watch?v=PTq8LBuQKCQ"}
                            content={"Clique aqui para ver o vídeo"}
                        />
                    </p>
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
    section3Title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
}