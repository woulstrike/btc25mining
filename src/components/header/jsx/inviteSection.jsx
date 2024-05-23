
import PropTypes from 'prop-types'
import inviteImg from '../../assets/invite.png'
import './../css/inviteButton.css'

export function InviteButton({ onClick }) {
    return (
    <button className="btn-image" onClick={onClick}>
        <img src={inviteImg} alt="Invite" className="btn-image__icon" />
        <span className="btn-image__text">Invite</span>
    </button>
    )
}


InviteButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}