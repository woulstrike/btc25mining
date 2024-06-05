import { useState } from 'react';
import './css/Invite.css';

export function Invite() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    const link = '';
    navigator.clipboard.writeText(link).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="invite-container">
      <h2 className="invite-title">Invite friends and get coins</h2>
      <h4 className='invite-title-two'>something will be here soon...</h4>
      <button className="invite-button" onClick={handleCopyLink}>
        {isCopied ? 'Link Copied!' : 'Copy link'} {/* ЗДЕСЬ НУЖНО сделать реф ссылку и чтобы при нажатии она автоматически копировалась у пользователя*/}
      </button>
    </div>
  );
}