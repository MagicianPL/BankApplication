import React from 'react';

const MessageModal = () => {
    return (
        <div className="message-modal">
            <h2>OSTRZEŻENIE</h2>
            <p>Przewalutowanie na walutę euro obciąży Twoje konto w kwocie <span>5 euro</span> - jest to całkowity koszt liczony po bieżącym kursie</p>
            <button className="accept">Akceptuj</button><button className="cancel">Anuluj</button>
        </div>
    );
};

export default MessageModal;