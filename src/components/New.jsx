import styles from "./New.module.css";
import PropTypes from 'prop-types';

export function New(props) {
    return (
        <div className={styles.content}>
            <h3>
                {props.title}
            </h3>
            <img className={styles.img} src={props.src} alt="" />
            <p>{props.description}</p>
        </div>
    )
}

New.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}