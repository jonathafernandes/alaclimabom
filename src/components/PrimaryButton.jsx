import styles from "./PrimaryButton.module.css";
import PropTypes from 'prop-types';

export function PrimaryButton(props) {
    return (
        <a
            className={styles.button}
            rel="noreferrer noopener"
            href={props.href}
            target={props.target}
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
    feature: PropTypes.func,
    target: PropTypes.bool
}