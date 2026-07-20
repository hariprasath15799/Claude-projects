"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ConfirmLogoutModal({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void;
  onCancel: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) return null;

  return createPortal(
    <div className="confirm-modal-overlay" onClick={onCancel}>
      <div
        className="confirm-modal"
        role="alertdialog"
        aria-modal="true"
        aria-label="Confirm log out"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Do you really want to logout?</h3>
        <div className="confirm-modal-actions">
          <button type="button" className="btn btn-yellow" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="btn btn-outline" onClick={onConfirm}>
            Yes
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
