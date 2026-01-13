import React, { useState } from "react";
import "./TransactionConfirmation.css";

/**
 * Cutwater Transaction Confirmation Modal Component
 *
 * Features:
 * - Success animation with animated checkmark
 * - Transaction details (From/To tokens with amounts)
 * - Complete transaction information (type, time, network, fees, rate, hash)
 * - Copy transaction hash functionality
 * - View on blockchain explorer
 * - Compact design - fits in one viewport without scrolling
 * - Cutwater branding from v4 design system
 *
 * Dependencies:
 * - React 18+
 * - Google Fonts: Playfair Display, Source Serif 4, Noto Sans
 */

const TransactionConfirmation = ({
  isOpen = true,
  onClose,
  transaction = {},
}) => {
  const [copied, setCopied] = useState(false);

  // Default transaction data (can be overridden by props)
  const defaultTransaction = {
    fromToken: "USDT",
    fromAmount: "3.4",
    fromIcon: "T",
    toToken: "USDi",
    toAmount: "58,883.28",
    toIcon: "U",
    type: "Swap",
    time: "01/08/2025, 13:55:13",
    network: "Solana",
    networkFee: "0.000203 USDT ($0.039)",
    exchangeRate: "1 USDT = 17,318.61 USDi",
    txHash: "5zdmzS...Evz",
    txHashFull: "5zdmzStB7wPKqH2Mu3U4ubGfLx9mjCxT4Wh8Vv9JEvz",
    explorerUrl: "#",
  };

  const tx = { ...defaultTransaction, ...transaction };

  // Handle copy transaction hash
  const handleCopyHash = () => {
    navigator.clipboard.writeText(tx.txHashFull);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle close modal
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  // Handle view on explorer
  const handleViewExplorer = () => {
    window.open(tx.explorerUrl, "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">Transaction Confirmed</h2>
          <button
            className="close-button"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Success Status */}
        <div className="status-section">
          <div className="success-icon">
            <svg width="26" height="26" viewBox="0 0 40 40">
              <path className="checkmark" d="M10 20 L17 27 L30 13" />
            </svg>
          </div>
          <div className="status-text">Transaction Complete</div>
          <div className="status-subtext">
            Your swap has been successfully processed
          </div>
        </div>

        {/* Transaction Details Card */}
        <div className="transaction-card">
          {/* From */}
          <div className="transaction-row">
            <div className="row-label">From</div>
            <div className="row-content">
              <div className="token-icon">{tx.fromIcon}</div>
              <span className="token-amount negative">
                -{tx.fromAmount} {tx.fromToken}
              </span>
            </div>
          </div>

          {/* To */}
          <div className="transaction-row">
            <div className="row-label">To</div>
            <div className="row-content">
              <div className="token-icon">{tx.toIcon}</div>
              <span className="token-amount positive">
                +{tx.toAmount} {tx.toToken}
              </span>
            </div>
          </div>
        </div>

        {/* Transaction Info */}
        <div className="info-section">
          <div className="info-row">
            <span className="info-label">Transaction Type</span>
            <span className="info-value">{tx.type}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Time</span>
            <span className="info-value">{tx.time}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Network</span>
            <div className="network-badge">
              <svg className="network-icon" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="8" fill="#14F195" />
              </svg>
              {tx.network}
            </div>
          </div>

          <div className="info-row">
            <span className="info-label">Network Fee</span>
            <span className="info-value small">{tx.networkFee}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Exchange Rate</span>
            <span className="info-value small">{tx.exchangeRate}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Transaction Hash</span>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="hash-text" onClick={handleCopyHash}>
                {tx.txHash}
              </span>
              <button
                className="copy-btn"
                onClick={handleCopyHash}
                aria-label="Copy hash"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <a
            href={tx.explorerUrl}
            className="explorer-link"
            onClick={(e) => {
              e.preventDefault();
              handleViewExplorer();
            }}
          >
            <span>View on Explorer</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TransactionConfirmation;
