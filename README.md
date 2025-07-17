# Solana Wallet Directory 2024

Welcome to the Solana Wallet Directory—a living, breathing guide for anyone navigating the ever-evolving world of Solana wallets. This project is more than just a feature matrix; it’s a hands-on, interactive tool designed to help developers, merchants, and everyday users make informed choices about which wallet best fits their needs.

## Why This Exists

The Solana ecosystem is vibrant, but with so many wallets, features, and compatibility quirks, it’s easy to get lost. I built this directory to bring clarity. Here, you’ll find a comprehensive, regularly updated comparison of major Solana wallets, including their platform support, custody models, Solana Pay QR compatibility, security audits, and more. Whether you’re looking for the best mobile wallet, hardware support, or just want to know which wallets support Solana Pay, this tool has you covered.

## What You’ll Find

- **Feature Matrix:** Instantly compare wallets across dozens of features—DEX swaps, NFT galleries, staking, fiat on/off ramps, and more.
- **Solana Pay QR Analysis:** Visual breakdowns and stats on which wallets support Solana Pay QR codes.
- **Advanced Filtering:** Slice and dice the data by platform, custody model, features, and security audits.
- **Wallet Comparison:** Select wallets to compare side-by-side, or dive into detailed stats for each one.
- **CSV Export:** Take the data offline for your own analysis.

## Who’s It For?

- **Developers** building Solana dApps or integrations
- **Merchants** seeking the best wallet for payments
- **Users** choosing their next wallet
- **Researchers** tracking wallet trends and adoption

## How It Works

Open `index.html` in your browser. All data and logic are client-side—no server required. The UI is clean, fast, and mobile-friendly. Data is updated regularly, and contributions are welcome!

## How to Maintain

### Adding New Wallets
1. **Update the Data:** Add new wallet entries to the `walletData` array in `app.js`. Follow the existing structure:
   ```javascript
   {
     "name": "Wallet Name",
     "platforms": ["iOS", "Android", "Chrome"],
     "custodyModel": "Self-custody",
     "dexSwap": true,
     "nftGallery": true,
     "staking": true,
     "fiatOnramp": true,
     "fiatOfframp": "Limited",
     "pushNotifications": true,
     "solanaPayQR": "Yes",
     "hardwareSupport": "Yes (Ledger)",
     "openSource": "Partial",
     "versionTested": "v1.0.0",
     "dateTested": "2024-01-01",
     "monthlyUsers": "1M+",
     "securityAudit": "Yes (Auditor Name)"
   }
   ```
2. **Test the UI:** Open `index.html` and verify the new wallet appears correctly in the grid and filters.
3. **Update Stats:** The statistics (total wallets, Solana Pay compatible, etc.) update automatically based on the data.

### Updating Existing Wallets
1. **Find the Wallet:** Locate the wallet entry in the `walletData` array in `app.js`.
2. **Update Fields:** Modify the relevant fields (version, date tested, features, etc.).
3. **Verify Changes:** Test the updates in the browser to ensure they display correctly.

### Adding New Features
1. **Data Structure:** Add new properties to the wallet objects in `walletData`.
2. **UI Updates:** Modify the HTML templates in `app.js` to display the new feature.
3. **Filtering:** Add filter options in `index.html` and update the filter logic in `app.js`.

### Regular Maintenance Tasks
- **Monthly Reviews:** Check for new wallet releases and feature updates
- **Security Audits:** Update audit status as new reports become available
- **User Counts:** Refresh monthly user statistics
- **Version Testing:** Update tested versions and dates
- **Solana Pay Support:** Verify QR code compatibility changes

---

If this directory helps you, or if you spot something out of date, feel free to open an issue or submit a pull request. Let’s make the Solana ecosystem more accessible, one wallet at a time.
