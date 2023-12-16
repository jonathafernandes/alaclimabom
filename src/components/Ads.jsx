import React from "react";
import postStyles from "./Post.module.css";
import adsStyles from "./Ads.module.css";

export function Ads() {

    const ads = [
        {
            id: 1,
            tag: 'Jovens',
            title: 'Formatura do Seminário e Instituto',
            date: '17 de Dezembro — 19h00',
            content: 'O evento será realizado na seda da Estaca Maceió Brasil.'
        }
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