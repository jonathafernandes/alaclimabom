import styles from "./Post.module.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

export function Post(props) {
    return (
        <div className={styles.content}>
            <header>
                <span className={styles.date}>Semana 08/10 à 15/10 <div className={styles.line}></div></span>
            </header>
            <div className={styles.contentPost}>
                <div className={styles.sideA}>
                    <section>
                        <h3>
                            {/*eslint-disable-next-line react/prop-types */}
                            {props.section1Title}
                        </h3>
                        {/*eslint-disable-next-line react/prop-types */}
                        <img src={img1} alt="" />
                        <p>{props.text1Img}</p>
                    </section>
                    <section>
                        <h3>
                            {/*eslint-disable-next-line react/prop-types */}
                            {props.section2Title}
                        </h3>
                        {/*eslint-disable-next-line react/prop-types */}
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
                    {/* <span className={styles.circle}></span> */}
                    <ul>
                        <li>
                            <span className={styles.titleAd}>
                                {props.titleAd1}
                            </span>
                            <br />
                            28 de Outubro
                            <br />
                            {props.ad1}
                        </li>
                        <li>
                            <span className={styles.titleAd}>
                                {props.titleAd2}
                            </span>
                            <br />
                            15 de Dezembro
                            <br />
                            {props.ad2}
                        </li>
                    </ul>
                    <div className={styles.info}>
                        <h5>Mais informações:</h5>
                        <p>A atividade das Moças será focada na parte social do programa Crianças e Jovens da Igreja, com o intuito de fortalecer amizades.
                        </p>
                        <br />
                        <p>A Caravana ao Templo será realizada apenas em Dezembro, mas é pedido desde já que, aqueles que têm interesse, reservem suas vagas e efetuem o pagamento com antecedência. Para reservar sua vaga, basta clicar <a className={styles.linkDetail} href="https://docs.google.com/forms/d/e/1FAIpQLScmdWiAD86Eml1yu23tjN6F_i-_uoYC1uWYz5JO_ccDxUK8eA/viewform" target="_blank">aqui</a> e preencher o formuláro. Para mais informções, procurar a Presidência do Quórum de Elderes.</p>
                    </div>
                </section>
                </div>
            </div>
        </div>
    )
}