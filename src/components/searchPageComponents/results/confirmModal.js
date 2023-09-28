// ConfirmModal.js
import React from 'react';
import { css } from '@emotion/react';

const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const modalContentStyle = css`
  background: white;
  padding: 20px;
  border-radius: 5px;
`;

const ConfirmModal = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div css={modalOverlayStyle}>
      <div css={modalContentStyle}>
        <p>Are you sure you want to delete? This change cannot be undone.</p>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>OK</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
