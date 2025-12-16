/* eslint-disable react/no-unknown-property */
import React from "react";

const WhatsAppChat = () => {
  return (
    <>
      <a
        href="https://wa.me/917010768196"
        className="whatsapp-chat-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp" />
      </a>
      <style jsx>{`
        .whatsapp-chat-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background-color: #25d366;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 9999;
          transition: all 0.3s ease;
          border: 2px solid #fff;
        }
        .whatsapp-chat-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          background-color: #128c7e;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default WhatsAppChat;
