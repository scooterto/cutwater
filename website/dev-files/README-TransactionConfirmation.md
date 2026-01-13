# Cutwater Transaction Confirmation Modal Component

A production-ready React modal component for displaying transaction confirmations with Cutwater v4 branding.

## Features

- ✅ Animated success checkmark
- ✅ Transaction details with From/To tokens and amounts
- ✅ Complete transaction information (type, time, network, fees, exchange rate, hash)
- ✅ Copy transaction hash to clipboard
- ✅ View transaction on blockchain explorer
- ✅ Compact design - fits in one viewport without scrolling
- ✅ Fully responsive (desktop, tablet, mobile)
- ✅ Cutwater v4 brand design system
- ✅ Clean, modular code structure

## Files

- `TransactionConfirmation.jsx` - Main React component
- `TransactionConfirmation.css` - Component styles with CSS variables
- `README-TransactionConfirmation.md` - This file

## Requirements

- React 18+
- Modern browser with CSS animations support
- Internet connection for Google Fonts

## Installation

### Option 1: Copy files to your React project

1. Copy `TransactionConfirmation.jsx` and `TransactionConfirmation.css` to your components directory:

   ```
   src/
   └── components/
       └── TransactionConfirmation/
           ├── TransactionConfirmation.jsx
           └── TransactionConfirmation.css
   ```

2. Import and use in your app:

   ```jsx
   import TransactionConfirmation from "./components/TransactionConfirmation/TransactionConfirmation";

   function App() {
     const [showModal, setShowModal] = useState(false);

     return (
       <>
         <button onClick={() => setShowModal(true)}>
           Complete Transaction
         </button>
         <TransactionConfirmation
           isOpen={showModal}
           onClose={() => setShowModal(false)}
         />
       </>
     );
   }
   ```

## Usage Examples

### Basic Usage (Default Data)

```jsx
import { useState } from "react";
import TransactionConfirmation from "./components/TransactionConfirmation/TransactionConfirmation";

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Show Transaction</button>
      <TransactionConfirmation
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
```

### With Custom Transaction Data

```jsx
import { useState } from "react";
import TransactionConfirmation from "./components/TransactionConfirmation/TransactionConfirmation";

function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const transactionData = {
    fromToken: "USDC",
    fromAmount: "100.00",
    fromIcon: "C",
    toToken: "USDi",
    toAmount: "1,731,861.00",
    toIcon: "U",
    type: "Swap",
    time: new Date().toLocaleString(),
    network: "Ethereum",
    networkFee: "0.00234 ETH ($8.45)",
    exchangeRate: "1 USDC = 17,318.61 USDi",
    txHash: "0xabc...xyz",
    txHashFull: "0xabcdef1234567890abcdef1234567890abcdef12",
    explorerUrl:
      "https://etherscan.io/tx/0xabcdef1234567890abcdef1234567890abcdef12",
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Show Transaction</button>
      <TransactionConfirmation
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        transaction={transactionData}
      />
    </>
  );
}
```

### With Callback After Close

```jsx
function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
    // Navigate to dashboard or perform other actions
    console.log("Transaction modal closed");
  };

  return <TransactionConfirmation isOpen={isModalOpen} onClose={handleClose} />;
}
```

## Props

| Prop          | Type     | Default | Description                                          |
| ------------- | -------- | ------- | ---------------------------------------------------- |
| `isOpen`      | boolean  | `true`  | Controls modal visibility                            |
| `onClose`     | function | -       | Callback function when modal is closed               |
| `transaction` | object   | `{}`    | Transaction data object (see Transaction Data below) |

## Transaction Data Object

All fields are optional. If not provided, default values will be used.

```javascript
{
  fromToken: "USDT",        // Token being sent
  fromAmount: "3.4",        // Amount being sent
  fromIcon: "T",            // Icon/letter for from token
  toToken: "USDi",          // Token being received
  toAmount: "58,883.28",    // Amount being received
  toIcon: "U",              // Icon/letter for to token
  type: "Swap",             // Transaction type (Swap, Transfer, etc.)
  time: "01/08/2025, 13:55:13",  // Transaction timestamp
  network: "Solana",        // Blockchain network
  networkFee: "0.000203 USDT ($0.039)",  // Gas/network fee
  exchangeRate: "1 USDT = 17,318.61 USDi",  // Exchange rate
  txHash: "5zdmzS...Evz",   // Shortened transaction hash
  txHashFull: "5zdmzStB7wPKqH2Mu3U4ubGfLx9mjCxT4Wh8Vv9JEvz",  // Full hash
  explorerUrl: "#"          // URL to blockchain explorer
}
```

## Implementation Guide

### 1. Integrate with Your Transaction Logic

```jsx
import { useState } from "react";
import TransactionConfirmation from "./components/TransactionConfirmation/TransactionConfirmation";

function SwapComponent() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [txData, setTxData] = useState(null);

  const executeSwap = async () => {
    try {
      // Execute your swap logic
      const result = await performSwap();

      // Set transaction data
      setTxData({
        fromToken: result.fromToken,
        fromAmount: result.fromAmount,
        toToken: result.toToken,
        toAmount: result.toAmount,
        txHash: result.hash.slice(0, 6) + "..." + result.hash.slice(-3),
        txHashFull: result.hash,
        explorerUrl: `https://explorer.solana.com/tx/${result.hash}`,
        time: new Date().toLocaleString(),
        // ... other fields
      });

      // Show confirmation modal
      setShowConfirmation(true);
    } catch (error) {
      console.error("Swap failed:", error);
    }
  };

  return (
    <>
      <button onClick={executeSwap}>Execute Swap</button>
      <TransactionConfirmation
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        transaction={txData}
      />
    </>
  );
}
```

### 2. Format Transaction Data from Web3

```jsx
import { useWeb3 } from "./hooks/useWeb3";

function TransactionHandler() {
  const { sendTransaction } = useWeb3();
  const [showModal, setShowModal] = useState(false);
  const [txData, setTxData] = useState(null);

  const handleTransaction = async (fromToken, toToken, amount) => {
    try {
      const receipt = await sendTransaction({
        from: fromToken,
        to: toToken,
        amount: amount,
      });

      // Format data for modal
      setTxData({
        fromToken: fromToken.symbol,
        fromAmount: amount.toString(),
        fromIcon: fromToken.symbol[0],
        toToken: toToken.symbol,
        toAmount: receipt.outputAmount.toString(),
        toIcon: toToken.symbol[0],
        type: "Swap",
        time: new Date(receipt.timestamp * 1000).toLocaleString(),
        network: receipt.network,
        networkFee: `${receipt.gasUsed} ${fromToken.symbol} ($${receipt.gasCostUSD})`,
        exchangeRate: `1 ${fromToken.symbol} = ${receipt.rate} ${toToken.symbol}`,
        txHash: receipt.hash.slice(0, 6) + "..." + receipt.hash.slice(-3),
        txHashFull: receipt.hash,
        explorerUrl: `https://solscan.io/tx/${receipt.hash}`,
      });

      setShowModal(true);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return (
    <TransactionConfirmation
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      transaction={txData}
    />
  );
}
```

### 3. Custom Network Icons

To customize the network icon color, modify the SVG fill in the component or pass custom SVG:

```jsx
// In TransactionConfirmation.jsx, modify line with network icon:
<svg className="network-icon" viewBox="0 0 16 16">
  <circle cx="8" cy="8" r="8" fill="#14F195" /> {/* Solana green */}
  {/* Or for Ethereum: fill="#627EEA" */}
  {/* Or for Bitcoin: fill="#F7931A" */}
</svg>
```

Or create a helper function:

```javascript
const getNetworkColor = (network) => {
  const colors = {
    Solana: "#14F195",
    Ethereum: "#627EEA",
    Bitcoin: "#F7931A",
    Polygon: "#8247E5",
    Avalanche: "#E84142",
  };
  return colors[network] || "#1e88e5";
};
```

## Customization

### Colors

All colors are defined as CSS variables in `TransactionConfirmation.css`:

```css
:root {
  --dark-navy: #0f1a3d;
  --primary-navy: #1a2b5f;
  --highlight-blue: #1e88e5;
  --success-green: #2d8a5f;
  /* ... more colors */
}
```

### Typography

Fonts are from Google Fonts (loaded in CSS):

- **Playfair Display** - Headings
- **Source Serif 4** - Body text, labels
- **Noto Sans** - Currency symbols, amounts

### Success Message

Edit the success text in `TransactionConfirmation.jsx`:

```jsx
<div className="status-text">Transaction Complete</div>
<div className="status-subtext">Your swap has been successfully processed</div>
```

### Modal Size

Adjust the modal width in `TransactionConfirmation.css`:

```css
.modal {
  max-width: 540px; /* Change to your preferred width */
}
```

## Features in Detail

### Copy to Clipboard

The component uses the Clipboard API to copy the full transaction hash:

```javascript
const handleCopyHash = () => {
  navigator.clipboard.writeText(tx.txHashFull);
  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};
```

You can extend this to show a "Copied!" tooltip by using the `copied` state.

### Animations

- **Success Icon**: Scale-in animation when modal appears
- **Checkmark**: Drawing animation for the checkmark path
- **Hover Effects**: Smooth transitions on interactive elements

All animations respect `prefers-reduced-motion` accessibility setting.

### Click Outside to Close

The modal overlay closes the modal when clicked:

```jsx
<div className="modal-overlay" onClick={handleClose}>
  <div className="modal" onClick={(e) => e.stopPropagation()}>
    {/* Modal content */}
  </div>
</div>
```

## Accessibility

The component includes:

- Proper ARIA labels on interactive buttons
- Keyboard navigation support
- Focus management
- Semantic HTML structure
- Reduced motion support for animations

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Live Demo

View the live component:
https://scooterto.github.io/cutwater/website/dev-files/transaction-confirmation-preview.html

## Design System

This component follows the Cutwater v4 design system:

- View brand guidelines: https://scooterto.github.io/cutwater/website/brand-guidelines-v4.html
- Landing page reference: https://scooterto.github.io/cutwater/landing-page-v4.html

## Notes for Developers

### State Management

If you're using Redux or another state management solution:

```jsx
import { useDispatch, useSelector } from "react-redux";
import { closeTransactionModal } from "./store/transactionSlice";

function MyComponent() {
  const dispatch = useDispatch();
  const { isOpen, transaction } = useSelector((state) => state.transaction);

  return (
    <TransactionConfirmation
      isOpen={isOpen}
      onClose={() => dispatch(closeTransactionModal())}
      transaction={transaction}
    />
  );
}
```

### Error Handling

You can extend the component to show error states:

```jsx
const TransactionConfirmation = ({ isOpen, onClose, transaction, error }) => {
  // ... existing code

  if (error) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal">
          <div className="error-icon">{/* X icon */}</div>
          <div className="error-text">Transaction Failed</div>
          <div className="error-message">{error}</div>
        </div>
      </div>
    );
  }

  // ... rest of component
};
```

### Loading State

Show a loading state while transaction is pending:

```jsx
const TransactionConfirmation = ({
  isOpen,
  onClose,
  transaction,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="loading-spinner">{/* Spinner animation */}</div>
          <div className="loading-text">Processing Transaction...</div>
        </div>
      </div>
    );
  }

  // ... rest of component
};
```

## Support

For questions or issues, contact the Cutwater development team.

## License

Proprietary - Cutwater Partners © 2025
