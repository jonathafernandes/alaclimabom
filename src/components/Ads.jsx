import React from "react";
import postStyles from "./Post.module.css";
import adsStyles from "./Ads.module.css";

export function Ads() {

    const ads = [
        {
            id: 1,
            tag: 'Todos os membros',
            title: 'Reunião Familiar',
            date: '09 de Janeiro — 19h00',
            content: 'Teremos uma renião familiar no dia 09 de Janeiro, às 19h00. Todos os membros são convidados a participar.'
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