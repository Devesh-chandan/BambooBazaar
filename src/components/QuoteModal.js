import React from 'react';

// We will add the CSS for this in index.css
const QuoteModal = ({ isOpen, quote, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        <p className="modal-quote">"{quote.text}"</p>
        <p className="modal-author">- {quote.author}</p>
      </div>
    </div>
  );
};

export default QuoteModal;