import styles from "./Post.module.css";

import imgReliefSocietyMissionaries from "../assets/relief-society-missionaries.png";
import imgNewBishopric from "../assets/new-bishopric.png";
import PropTypes from 'prop-types';

import { Ads } from "./Ads";
import { New } from "./New";

export function Post(props) {
    return (
        <div className={styles.content} id="post">
            <header>
                <span className={styles.date}>08/12 à 07/01 <div className={styles.line}></div></span>
            </header>
            <div className={styles.contentPost}>
                <section className={styles.news}>
                    < New 
                        title={'Cestas para os missionários'}
                        description={'As irmãs da Sociedade de Socorro uniram esforços para arrecadar alimentos, com o propósito de preparar cestas para presentear os missionários.'}
                        src={imgReliefSocietyMissionaries}
                    />
                    < New 
                        title={'Novo bispado'}
                        description={'No dia 07/01, o Presidente da Estaca, Manoel Messias, anunciou o novo bispado da ala. Clesivan Carlos foi chamado como novo Bispo da ala junto com os seus conselheiros, Bruno William e Antônio Veríssimo.'}
                        src={imgNewBishopric}
                    />
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
                            <a href="https://www.churchofjesuschrist.org/study/general-conference/2023/10/16ardern?lang=por" target="_blank" rel="noreferrer">
                                <div className={styles.contentLesson}>
                                    {/*TO REMEMBER: manter estrutura

                                    <img className={styles.lessonImg} src={} alt="" /> */}
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