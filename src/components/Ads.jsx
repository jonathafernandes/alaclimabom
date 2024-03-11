import React from "react";
import postStyles from "./Post.module.css";
import adsStyles from "./Ads.module.css";

export function Ads() {
    const ads = [
        {
            id: 1,
            tag: 'Templo',
            title: 'Caravana ao Templo de Recife',
            date: '25 de Abril',
            content: 'Todos os membros da ala estão convidados a participar da caravana ao Templo de Recife. Para garantir a sua vaga, entre em contato com a presidência do Quórum de Elderes através do número 8293956205.'
        },
        {
            id: 2,
            tag: 'Ala',
            title: 'Reunião de Integração',
            date: 'Todas as sextas-feiras',
            content: 'Toda sexta-feira, a partir das 19h, a ala Clima Bom promove uma reunião para integração dos membros da ala. Venha participar e traga a sua família!'
        },
    ]

    return (
        <div>
            <h3>Anúncios</h3>
            <ul className={adsStyles.adsList}>
                {ads.map((item) => (
                    <React.Fragment key={item.id}>
                        {ads == "" ? 'Nenhum anúncio no momento...' :
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
                        </li>}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    )
}