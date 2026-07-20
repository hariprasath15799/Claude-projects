"use client";

import { useEffect } from "react";

export default function ConfirmLogoutModal({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void;
  onCancel: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onCancel();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onCancel]);

  return (
    <div className="confirm-modal-overlay" onClick={onCancel}>
      <div
        className="confirm-modal"
        role="alertdialog"
        aria-modal="true"
        aria-label="Confirm log out"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Log out?</h3>
        <p>You&apos;ll need your mobile number and MPIN to log back in.</p>
        <div className="confirm-modal-actions">
          <button type="button" className="btn btn-outline" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="btn btn-dark" onClick={onConfirm}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
