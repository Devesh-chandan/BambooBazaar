import React from 'react';

// --- ADD YOUR 7 CONTACTS HERE ---
// You can add more people to this list, up to 7 or more.
const contactList = [
  {
    name: "Devesh Chandan",
    email: "deveshc1012@gmail.com",
    mobile: "+91 8623047979"
  },
  {
    name: "Rucha Kolambe",
    email: "kolamberucha87@gmail.com",
    mobile: "+91  8975906014"
  },
  {
    name: " Atish Pardeshi",
    email: "atishpardeshi18@gmail.com",
    mobile: "+91  9881015133"
  },
  {
    name: " Yash Hase",
    email: "yashhase1010@gmail.com",
    mobile: "+91  8669056750"
  },
  {
    name: " Mahi Khanade",
    email: "mahikhanade@gmail.com",
    mobile: "+91 8411033669"
  },
  {
    name: "Aashutosh Barve",
    email: "barveaashutosh96@gmail.com",
    mobile: "+91 9370916328"
  },
  {
    name: "Sujay Dagru",
    email: "sujaydargu@gmail.com",
    mobile: "+91 9021005643"

  },
  // Add more contacts here, like this:
  // {
  //   name: "Another Name",
  //   email: "another@example.com",
  //   mobile: "+91 12345 67890"
  // },
];
// --------------------------------------------------

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        
        <h2 className="contact-modal-title">Contact Us</h2>
        <p className="contact-modal-subtitle">
          We'd love to hear from you!
        </p>
        
        {/* --- THIS IS THE NEW CUSTOM BOX SECTION --- */}
        <div className="contact-card-list">
          {contactList.map((contact, index) => (
            <div className="contact-card" key={index}>
              <h3 className="contact-card-name">{contact.name}</h3>
              <div className="contact-card-detail">
                <span>📧</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div className="contact-card-detail">
                <span>📞</span>
                <a href={`tel:${contact.mobile}`}>{contact.mobile}</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ContactModal;