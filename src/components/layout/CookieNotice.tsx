"use client";

import { useEffect, useState } from "react";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem("agentsify-cookie-consent");
    setVisible(consent !== "accepted");
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem("agentsify-cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    window.localStorage.setItem("agentsify-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="cookie-notice">
      <p className="leading-relaxed">
        We use cookies to improve your experience and measure traffic.
      </p>
      <div className="cookie-actions">
        <button
          type="button"
          onClick={handleAccept}
        >
          Accept
        </button>
        <button
          type="button"
          onClick={handleDecline}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
