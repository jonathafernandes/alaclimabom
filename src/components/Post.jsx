import styles from "./Post.module.css";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import PropTypes from 'prop-types';

// import { SecondaryButton } from "./SecondaryButton";

export function Post(props) {
    return (
            <div className={styles.content} id="post">
                <header>
                    <span className={styles.date}>16/10 à 29/10 <div className={styles.line}></div></span>
                </header>
                <div className={styles.contentPost}>
                    <div className={styles.sideA}>
                        <section>
                            <h3>
                                {props.news1Title}
                            </h3>
                            <img src={img1} alt="" />
                            <p>{props.text1Img}</p>
                            {/* <SecondaryButton src="#"/> */}
                        </section>
                        <section>
                            <h3>
                                {props.news2Title}
                            </h3>
                            <img src={img2} alt="" />
                            <p>{props.text2Img}</p>
                            {/* <SecondaryButton src="#"/> */}
                        </section>
                    </div>
                    <div className={styles.sideA}>
                        <section>
                            <h3>
                                {props.news3Title}
                            </h3>
                            <img src={img3} alt="" />
                            <p>{props.text3Img}</p>
                            {/* <SecondaryButton src="#"/> */}
                        </section>
                        <section>
                            <h3>
                                {props.news4Title}
                            </h3>
                            <img src={img4} alt="" />
                            <p>{props.text4Img}</p>
                            {/* <SecondaryButton src="#"/> */}
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
                                <strong>Todos os domingos — 17h00</strong>
                                <br />
                                {props.ad1}
                                <p>O ensaio do coral é realizado todos os domingos junto com a Ala Colina. Todos estão convidados!
                                </p>
                            </li>
                            <li>
                                <span className={styles.titleAd}>
                                    {props.titleAd2}
                                </span>
                                <br />
                                <strong>09 de Novembro — 20h00</strong>
                                <br />
                                {props.ad2}
                                <p>Palestra sobre como podemos usar a tecnologia para nos beneficiar em nossa busca pela autossuficiência financeira.
                                </p>
                            </li>
                            <li>
                                <span className={styles.titleAd}>
                                    {props.titleAd3}
                                </span>
                                <br />
                                <strong>11 de Novembro — 16h00</strong>
                                <br />
                                {props.ad3}
                                <p>Atividade para todos os jovens da ala. Teremos gincana e cinema. Todos convidados!</p>
                            </li>
                            <li>
                                <span className={styles.titleAd}>
                                    {props.titleAd4}
                                </span>
                                <br />
                                <strong>15 de Dezembro</strong>
                                <br />
                                {props.ad4}
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
    text3Img: PropTypes.string.isRequired,
    text4Img: PropTypes.string.isRequired,
    news1Title: PropTypes.string.isRequired,
    news2Title: PropTypes.string.isRequired,
    news3Title: PropTypes.string.isRequired,
    news4Title: PropTypes.string.isRequired,
    section3Title: PropTypes.string.isRequired,
    section4Title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    textContent: PropTypes.string.isRequired,
    titleAd1: PropTypes.string.isRequired,
    titleAd2: PropTypes.string.isRequired,
    titleAd3: PropTypes.string.isRequired,
    titleAd4: PropTypes.string.isRequired,
    ad1: PropTypes.string.isRequired,
    ad2: PropTypes.string.isRequired,
    ad3: PropTypes.string.isRequired,
    ad4: PropTypes.string.isRequired,
}