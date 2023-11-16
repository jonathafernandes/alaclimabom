import styles from "./PrimaryButton.module.css";
import PropTypes from 'prop-types';

export function PrimaryButton(props) {
    return (
        <a
            className={styles.button}
            target="_blank"
            rel="noreferrer noopener"
            href={props.href}
            onClick={props.feature}>
            {props.text}
            {props.icon}
        </a>
    )
}

PrimaryButton.propTypes = {
    href: PropTypes.string,
    text: PropTypes.string.isRequired,
    icon: PropTypes.element,
    feature: PropTypes.func
}