import { ArrowSquareOut } from "@phosphor-icons/react";
import styles from "./Button.module.css";
import PropTypes from 'prop-types';

export function Button(props) {
    return (
        <a className={styles.button} href={props.src} target="_blank" rel="noreferrer">Saiba mais <ArrowSquareOut size={15} /></a>
    )
}

Button.propTypes = {
    src: PropTypes.string.isRequired,
}