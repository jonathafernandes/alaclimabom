import styles from "./Announcements.module.css";

export function Announcements() {
    const announcements = []

    return (
        <div>
            <ul className={styles.list}>
                {announcements.map((item) => (
                    <>
                        <div key={item.id}>
                            <li>
                                <span className={styles.tag}>
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