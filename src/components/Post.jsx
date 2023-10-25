import styles from "./Post.module.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import PropTypes from 'prop-types';


export function Post(props) {
    return (
        <div className={styles.content} id="post">
            <header>
                <span className={styles.date}>Semana 08/10 à 15/10 <div className={styles.line}></div></span>
            </header>
            <div className={styles.contentPost}>
                <div className={styles.sideA}>
                    <section>
                        <h3>
                            {props.section1Title}
                        </h3>
                        <img src={img1} alt="" />
                        <p>{props.text1Img}</p>
                    </section>
                    <section>
                        <h3>
                            {props.section2Title}
                        </h3>
                        <img src={img2} alt="" />
                        <p>{props.text2Img}</p>
                    </section>
                </div>
                <div className={styles.sideB}>
                <section>
                    <h3>
                        {props.section3Title}
                    </h3>
                    <span>{props.author}</span>
                    <p className={styles.contentMessage}>{props.textContent}</p>
                </section>
                <section>
                    <h3>
                        {props.section4Title}
                    </h3>
                    <ul>
                        <li>
                            <span className={styles.titleAd}>
                                {props.titleAd1}
                            </span>
                            <br />
                            <strong>28 de Outubro</strong>
                            <br />
                            {props.ad1}
                            <p>A atividade será focada na parte social do programa Crianças e Jovens da Igreja, com o intuito de fortalecer amizades.
                            </p>
                        </li>
                        <li>
                            <span className={styles.titleAd}>
                                {props.titleAd2}
                            </span>
                            <br />
                            <strong>15 de Dezembro</strong>
                            <br />
                            {props.ad2}
                            <p>Será realizada apenas em dezembro, mas é pedido desde já que aqueles que têm interesse reservem suas vagas e efetuem o pagamento com antecedência. Para reservar sua vaga, basta clicar <a className={styles.linkDetail} href="https://docs.google.com/forms/d/e/1FAIpQLScmdWiAD86Eml1yu23tjN6F_i-_uoYC1uWYz5JO_ccDxUK8eA/viewform" target="_blank" rel="noreferrer noopener">aqui</a> e preencher o formuláro. Para mais informações, procurar a Presidência do Quórum de Elderes.</p>
                        </li>
                    </ul>
                </section>
                </div>
            </div>
        </div>
    )
}

Post.propTypes = {
    text1Img: PropTypes.string.isRequired,
    text2Img: PropTypes.string.isRequired,
    section1Title: PropTypes.string.isRequired,
    section2Title: PropTypes.string.isRequired,
    section3Title: PropTypes.string.isRequired,
    section4Title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
    titleAd1: PropTypes.string.isRequired,
    titleAd2: PropTypes.string.isRequired,
    ad1: PropTypes.string.isRequired,
    ad2: PropTypes.string.isRequired,
}