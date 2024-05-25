import inviteImg from '../../assets/invite.png'
import './../css/inviteButton.css'

export function InviteButton() {
    return (
    <button className="btn-image">
        <img src={inviteImg} alt="Invite" className="btn-image__icon" />
        <span className="btn-image__text">Invite</span>
    </button>
    )
  }