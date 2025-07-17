# Solana Wallet Directory

Welcome to the Solana Wallet Directory—a living, breathing guide for anyone navigating the ever-evolving world of Solana wallets. This project is more than just a feature matrix; it's a hands-on, interactive tool designed to help developers, merchants, and everyday users make informed choices about which wallet best fits their needs.

## Project Status: Complete and Ready for Submission

This project has been completed as part of the Solana Pay Bounty and meets all requirements. We've comprehensively catalogued over 50 wallets with complete feature matrices, built an interactive dashboard with advanced filtering capabilities, created detailed Solana Pay QR analysis with visual charts, implemented CSV export functionality, and delivered a professional design that works seamlessly on mobile devices. The entire project is open source under the MIT License.

## Why This Exists

The Solana ecosystem is vibrant, but with so many wallets, features, and compatibility quirks, it's easy to get lost. I built this directory to bring clarity. Here, you'll find a comprehensive, regularly updated comparison of major Solana wallets, including their platform support, custody models, Solana Pay QR compatibility, security audits, and more. Whether you're looking for the best mobile wallet, hardware support, or just want to know which wallets support Solana Pay, this tool has you covered.

## What You'll Find

The directory provides a comprehensive feature matrix that lets you instantly compare over 50 wallets across dozens of features including DEX swaps, NFT galleries, staking, fiat on/off ramps, and more. We've included detailed Solana Pay QR analysis with visual breakdowns and statistics on which wallets support Solana Pay QR codes, complete with detailed charts. The advanced filtering system allows you to slice and dice the data by platform, custody model, features, and security audits. You can select wallets to compare side-by-side, or dive into detailed stats for each one. The CSV export functionality lets you take the data offline for your own analysis. Our comprehensive coverage includes major wallets like Phantom, Solflare, Backpack, Decaf, Jupiter Wallet, and many more from the official Solana wallets page.

## Current Statistics

We've catalogued over 50 wallets with comprehensive coverage across the ecosystem. Five or more wallets are fully Solana Pay compatible with QR support, while over 40 wallets are available on mobile platforms including iOS and Android. We've identified three or more hardware wallet options for users who prioritize security, and over 30 browser extension and desktop wallets for desktop users. Fifteen or more wallets have undergone verified security audits, providing additional confidence for users and developers.

## Who's It For

This directory serves developers building Solana dApps or integrations who need to understand which wallets their users might be using. It helps merchants seeking the best wallet for payments and Solana Pay integration. Everyday users can make informed choices about which wallet fits their specific needs and use cases. Researchers tracking wallet trends and adoption patterns will find valuable data for their analysis.

## How to Use

Getting started is simple. Just open the index.html file in your browser for an instant live demo. No setup is required since all data and logic are client-side, meaning no server is needed. The responsive design ensures it works perfectly on mobile devices, and the interface is optimized for performance and usability.

## How to Maintain

### Adding New Wallets

To add new wallets, update the walletData array in app.js following the existing structure. Each wallet entry should include the name, platforms supported, custody model, feature flags for DEX swap, NFT gallery, staking, fiat on/off ramp capabilities, push notification support, Solana Pay QR compatibility status, hardware support information, open source status, version tested, date tested, monthly users, and security audit information. After adding the data, test the UI by opening index.html to verify the new wallet appears correctly in the grid and filters. The statistics update automatically based on the data.

### Updating Existing Wallets

To update existing wallets, locate the wallet entry in the walletData array in app.js and modify the relevant fields such as version, date tested, features, or other information. Always verify the changes by testing them in the browser to ensure they display correctly.

### Adding New Features

When adding new features, first extend the data structure by adding new properties to the wallet objects in walletData. Then modify the HTML templates in app.js to display the new feature. Finally, add filter options in index.html and update the filter logic in app.js to support the new feature.

### Regular Maintenance Tasks

The directory requires regular maintenance to stay current. Conduct monthly reviews to check for new wallet releases and feature updates. Update security audit status as new reports become available. Refresh monthly user statistics to reflect current adoption. Update tested versions and dates as you verify new releases. Most importantly, verify Solana Pay QR code compatibility changes based on the official Solana Pay specification.

## Project Structure

The project is organized with index.html serving as the main application interface, app.js containing the core application logic and wallet data, style.css providing styling and responsive design, and wallet_logos.js managing wallet logo URLs and the fallback system. The README.md provides this documentation, while the LICENSE file contains the MIT License. We've included solana_pay_qr_analysis_updated.png showing the Solana Pay QR support chart, update_solana_pay_chart.py as a Python script for chart generation, and solana_wallet_feature_matrix.csv for CSV export of wallet data.

## Features Implemented

### Core Requirements

We've successfully implemented all core requirements including a comprehensive wallet inventory with over 50 wallets and complete coverage. The feature matrix includes all required features plus additional useful ones that enhance the user experience. Platform support covers iOS, Android, Chrome, Firefox, Brave, Edge, desktop systems, and hardware wallets. Custody models are categorized as self-custody, hardware, or MPC. Solana Pay QR support is clearly categorized as Yes, Partial, No, or Unknown. Version tracking includes tested versions and dates for each wallet.

### Advanced Features

The interactive dashboard provides a professional web interface with advanced filtering across multiple categories. The wallet comparison tool enables side-by-side comparison functionality. CSV export allows data export for external analysis. The responsive design ensures mobile-friendly interface across all devices. Visual analytics include Solana Pay QR support charts and analysis. Real-time wallet search functionality helps users find what they need quickly. The entire interface features professional UI/UX with clean, intuitive design.

## Data Sources

Our data comes from multiple reliable sources including the official Solana Wallets page, the Solana Pay specification, individual wallet websites and documentation, and community verification through user reports and testing. This multi-source approach ensures accuracy and comprehensiveness.

## Contributing

If this directory helps you, or if you spot something out of date, feel free to open an issue for bugs or missing data, submit a pull request with updates, test and verify wallet information, or suggest new features or improvements. The project thrives on community contributions and feedback.

## License

This project is licensed under the MIT License, which allows for free use, modification, and distribution. See the LICENSE file for complete details.

---

Built for the Solana ecosystem with care to make wallet discovery easier for everyone.

*Last updated: July 2024*
