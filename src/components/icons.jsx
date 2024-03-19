import proptTypes from 'prop-types'

export const MenuIcon = ({ className }) => {
    return (
        <svg stroke="currentColor" className={className} fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path></svg>
    )
}

MenuIcon.propTypes = {
    className: proptTypes.string
}
export const CloseIcon = ({ className }) => {
    return (
        <svg stroke="currentColor" className={className} fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
    )
}

CloseIcon.propTypes = {
    className: proptTypes.string
}