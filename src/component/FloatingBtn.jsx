import React from "react";
import styles from "./FloatingBtn.module.css";

const FloatingBtn = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/+919519515052?text=Hi%20there!", "_blank");
  };

  return (
    <button
      className={styles.whatsappButton}
      onClick={handleWhatsAppClick}
      aria-label="Chat with us on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Icon"
        className={styles.whatsappIcon}
      />
    </button>
  );
};

export default FloatingBtn;
