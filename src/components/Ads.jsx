import postStyles from "./Post.module.css";
import adsStyles from "./Ads.module.css";

export function Ads() {
    const ads = [

    ]

    return (
        <div>
            <ul className={adsStyles.adsList}>
                {ads.map((item) => (
                    <>
                        <h3>Anúncios</h3><div key={item.id}>
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
                        </div>
                    </>
                ))}
            </ul>
        </div>
    )
}