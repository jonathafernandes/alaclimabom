import styles from "./Announcements.module.css";

export function Announcements() {
    const announcements = [
        {
            id: 1,
            tag: "Novo",
            date: "01/01/2021",
            title: "Notícia 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante nec quam ultricies luctus. Nulla facilisi. Donec id nunc nec or"
        },
        {
            id: 2,
            tag: "Novo",
            date: "01/01/2021",
            title: "Notícia 2",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante nec quam ultricies luctus. Nulla facilisi. Donec id nunc nec or"
        },
        {
            id: 3,
            tag: "Novo",
            date: "01/01/2021",
            title: "Notícia 3",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec ante nec quam ultricies luctus. Nulla facilisi. Donec id nunc nec or"
        }
    ]

    return (
        <div className={styles.content}>
            <h3>Atividades</h3>
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