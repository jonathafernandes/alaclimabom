import styles from "./SecondaryButton.module.css";
import PropTypes from 'prop-types';

export function SecondaryButton(props) {
    return (
        <a
            className={styles.button}
            href={props.src}
            onClick={props.feature}
            target="_blank"
            rel="noreferrer">
            {props.content}
            {props.icon}
        </a>
    )
}

SecondaryButton.propTypes = {
    src: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    icon: PropTypes.element,
    feature: PropTypes.element
}