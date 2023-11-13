import React from "react";
import postStyles from "./Post.module.css";
import adsStyles from "./Ads.module.css";

export function Ads() {

    const ads = [
        {
            id: 1,
            tag: 'Coral',
            title: 'Ensaio do coral',
            date: 'Todos os domingos — 17h00',
            content: 'O ensaio do coral é realizado todos os domingos junto com a Ala Colina. Todos estão convidados!'
        },
        {
            id: 2,
            tag: 'Atividade',
            title: 'Atividade da Sociedade de Socorro',
            date: '15 de Novembro — 16h00',
            content: 'Vamos ter uma oficina de artesanato.'
        },
        {
            id: 3,
            tag: 'Natal',
            title: 'Contraternização de Natal',
            date: '08 de Dezembro — 18h00',
            content: ''
        },
        {
            id: 4,
            tag: 'Natal',
            title: 'Concerto de Natal',
            date: '09 de Dezembro',
            content: {
                __html: 'Caso queira participar do nosso concerto de Natal, clique <a href="https://chat.whatsapp.com/JwRR3yd58zZH4t2THU0LUC" target="_blank" rel="noreferrer noopener">aqui</a> para entrar no grupo do WhatsApp.'
            }
        },
        {
            id: 5,
            tag: 'Templo',
            title: 'Caravana ao templo',
            date: '15 de Dezembro',
            content: {
                __html: 'Será realizada em Dezembro, e é pedido desde já que aqueles que têm interesse reservem suas vagas e efetuem o pagamento com antecedência. Para reservar sua vaga, basta clicar <a className={styles.linkDetail} href="https://docs.google.com/forms/d/e/1FAIpQLScmdWiAD86Eml1yu23tjN6F_i-_uoYC1uWYz5JO_ccDxUK8eA/viewform" target="_blank" rel="noreferrer noopener">aqui</a> e preencher o formuláro. Para mais informações, procurar a Presidência do Quórum de Elderes.'
            }
        },
    ]

    return (
        <div>
            <h3>Anúncios</h3>
            <ul className={adsStyles.adsList}>
                {ads.map((item) => (
                    <React.Fragment key={item.id}>
                        <li>
                            <span className={postStyles.tag}>
                                {item.tag}
                            </span>
                            <br />
                            <strong>{item.date}</strong>
                            <br />
                            {item.title}
                            {item.content && item.content.__html ? (
                                <p dangerouslySetInnerHTML={{ __html: item.content.__html }} />
                                ) : (
                                <p>{item.content}</p>
                            )}
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </div>
    )
}