import { ArrowSquareOut } from "@phosphor-icons/react";
import styles from "./SecondaryButton.module.css";
import PropTypes from 'prop-types';

export function SecondaryButton(props) {
    return (
        <a className={styles.button} href={props.src} target="_blank" rel="noreferrer">{props.content} <ArrowSquareOut size={15} /></a>
    )
}

SecondaryButton.propTypes = {
    src: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}