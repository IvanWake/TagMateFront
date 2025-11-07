import React from "react";
import styles from "./SettingsMain.module.css";
import { ModalCryingIcon } from "../SettingIcons";

interface LogoutModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  isOpen,
  onCancel,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <ModalCryingIcon />
        <div className={styles.modalTitle}>
          Ты действительно хочешь выйти? =(
        </div>

        <div className={styles.modalButtons}>
          <div className={styles.cancelButton} onClick={onCancel}>
            Остаться
          </div>
          <div className={styles.confirmButton} onClick={onConfirm}>
            Выйти
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
