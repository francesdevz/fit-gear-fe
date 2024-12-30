import { Link } from "react-router-dom"


/**
 * @typedef {Object} LinkBtnProps
 * @property {Object} style - The style object for the link.
 * @property {string} redirectStr - The path to redirect to.
 * @property {string} label - The text displayed for the link.
 */

/**
 * 
 * @param {object} props.style
 * @param {string} props.redirectStr 
 * @param {string} props.label 
 * @returns {JSX.Element}
 */
const LinkBtn = ({style, redirectStr, label}) => {
    return (
        <Link
            style={style}
            to={redirectStr}
        >
            {label}
        </Link>
    )
}

export default LinkBtn