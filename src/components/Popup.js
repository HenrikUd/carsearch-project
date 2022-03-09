import React from "react";
import "./Popup.css";

export default function Popup({ open, children, onClose }) {
  if (!open) return null;
  return (
    <div className="popup">
      <div className="popup-inner">
      <button className="close" onClick={onClose}></button>
      </div>
      {children}
    </div>
  );
}


