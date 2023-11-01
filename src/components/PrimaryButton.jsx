import styles from "./PrimaryButton.module.css";
import PropTypes from 'prop-types';

export function PrimaryButton(props) {
    return (
        <a className={styles.button} target="_blank" href={props.href} rel="noreferrer noopener">
            {props.text}
            {props.icon}
        </a>
    )
}

PrimaryButton.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.element
}