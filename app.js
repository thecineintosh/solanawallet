// Use wallet logos from external file
// walletLogos object is now defined in wallet_logos.js

// Wallet data
const walletData = [
  {
    "name": "Phantom",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave", "Edge"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Partial",
    "hardwareSupport": "Yes (Ledger)",
    "openSource": "Partial",
    "versionTested": "22.08.08 (iOS)",
    "dateTested": "2024-08-01",
    "monthlyUsers": "15M+",
    "securityAudit": "Yes (Kudelski)"
  },
  {
    "name": "Solflare",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave", "Edge", "Web"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Yes",
    "hardwareSupport": "Yes (Ledger)",
    "openSource": false,
    "versionTested": "v2.0+",
    "dateTested": "2024-07-15",
    "monthlyUsers": "3M+",
    "securityAudit": "Not Available"
  },
  {
    "name": "Backpack",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": true,
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": "Yes (Ledger, Trezor, Keystone)",
    "openSource": "Partial",
    "versionTested": "v0.10.150",
    "dateTested": "2024-07-01",
    "monthlyUsers": "100K+",
    "securityAudit": "Yes (Halborn)"
  },
  {
    "name": "Trust Wallet",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": "Yes (Ledger, Trezor)",
    "openSource": true,
    "versionTested": "v8.0+",
    "dateTested": "2024-02-16",
    "monthlyUsers": "80M+",
    "securityAudit": "Yes (ISO 27001)"
  },
  {
    "name": "Glow",
    "platforms": ["iOS", "Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Yes",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v2.0+",
    "dateTested": "2024-05-27",
    "monthlyUsers": "100K+",
    "securityAudit": "Not Available"
  },
  {
    "name": "Exodus",
    "platforms": ["iOS", "Android", "Windows", "Mac", "Linux"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": "Limited",
    "solanaPayQR": "No",
    "hardwareSupport": "Yes (Trezor)",
    "openSource": false,
    "versionTested": "v24.0+",
    "dateTested": "2024-01-01",
    "monthlyUsers": "10M+",
    "securityAudit": "Not Available"
  },
  {
    "name": "Atomic Wallet",
    "platforms": ["iOS", "Android", "Windows", "Mac", "Linux"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": "Limited",
    "solanaPayQR": "No",
    "hardwareSupport": false,
    "openSource": true,
    "versionTested": "v2.80+",
    "dateTested": "2024-01-01",
    "monthlyUsers": "10M+",
    "securityAudit": "Not Available"
  },
  {
    "name": "Coinbase Wallet",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": "Limited",
    "solanaPayQR": "No",
    "hardwareSupport": "Yes (Ledger)",
    "openSource": false,
    "versionTested": "v3.0+",
    "dateTested": "2024-01-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Brave Wallet",
    "platforms": ["Built into Brave browser", "iOS", "Android"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": false,
    "fiatOnramp": false,
    "fiatOfframp": false,
    "pushNotifications": false,
    "solanaPayQR": "No",
    "hardwareSupport": false,
    "openSource": true,
    "versionTested": "v1.38+",
    "dateTested": "2024-01-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Ledger Nano X",
    "platforms": ["Hardware", "iOS", "Android", "Windows", "Mac", "Linux"],
    "custodyModel": "Hardware (self-custody)",
    "dexSwap": false,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": false,
    "fiatOfframp": false,
    "pushNotifications": false,
    "solanaPayQR": "No",
    "hardwareSupport": "Native",
    "openSource": false,
    "versionTested": "Firmware 2.8.9+",
    "dateTested": "2024-08-23",
    "monthlyUsers": "2M+",
    "securityAudit": "Yes (EAL5+)"
  },
  {
    "name": "OKX Wallet",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": true,
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": "Unknown",
    "openSource": false,
    "versionTested": "v6.90.1+",
    "dateTested": "2024-10-20",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Decaf",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Yes",
    "hardwareSupport": "Yes (Ledger)",
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-12-01",
    "monthlyUsers": "50K+",
    "securityAudit": "Not Available"
  },
  {
    "name": "Jupiter Wallet",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Yes",
    "hardwareSupport": "Yes (Ledger)",
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-12-01",
    "monthlyUsers": "100K+",
    "securityAudit": "Not Available"
  },
  {
    "name": "Slope",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Yes",
    "hardwareSupport": "Yes (Ledger)",
    "openSource": false,
    "versionTested": "v2.0+",
    "dateTested": "2024-10-01",
    "monthlyUsers": "500K+",
    "securityAudit": "Not Available"
  },
  {
    "name": "Torus",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave", "Web"],
    "custodyModel": "MPC",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": false,
    "openSource": "Partial",
    "versionTested": "v1.0+",
    "dateTested": "2024-09-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Yes (Trail of Bits)"
  },
  {
    "name": "Coin98",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": "Unknown",
    "openSource": false,
    "versionTested": "v5.0+",
    "dateTested": "2024-08-01",
    "monthlyUsers": "2M+",
    "securityAudit": "Not Available"
  },
  {
    "name": "Math Wallet",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": "Unknown",
    "openSource": false,
    "versionTested": "v5.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "1M+",
    "securityAudit": "Not Available"
  },
  {
    "name": "TokenPocket",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": "Unknown",
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-06-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Safepal",
    "platforms": ["iOS", "Android", "Hardware"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": "Native",
    "openSource": false,
    "versionTested": "v4.0+",
    "dateTested": "2024-05-01",
    "monthlyUsers": "10M+",
    "securityAudit": "Yes (Certik)"
  },
  {
    "name": "Jupiter Mobile",
    "platforms": ["iOS", "Android"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-01-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Fuse",
    "platforms": ["iOS"],
    "custodyModel": "MPC (smart account)",
    "dexSwap": true,
    "nftGallery": true,
    "staking": false,
    "fiatOnramp": false,
    "fiatOfframp": false,
    "pushNotifications": true,
    "solanaPayQR": "No",
    "hardwareSupport": false,
    "openSource": true,
    "versionTested": "TestFlight",
    "dateTested": "2024-07-15",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Nightly",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Yes",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Ultimate Wallet",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Partial",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Sollet",
    "platforms": ["Web", "Chrome"],
    "custodyModel": "Self-custody",
    "dexSwap": false,
    "nftGallery": false,
    "staking": false,
    "fiatOnramp": false,
    "fiatOfframp": false,
    "pushNotifications": false,
    "solanaPayQR": "No",
    "hardwareSupport": false,
    "openSource": true,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Solong",
    "platforms": ["Chrome"],
    "custodyModel": "Self-custody",
    "dexSwap": false,
    "nftGallery": false,
    "staking": false,
    "fiatOnramp": false,
    "fiatOfframp": false,
    "pushNotifications": false,
    "solanaPayQR": "No",
    "hardwareSupport": false,
    "openSource": true,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Coinhub",
    "platforms": ["iOS", "Android"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Zelcore",
    "platforms": ["iOS", "Android", "Windows", "Mac", "Linux"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Huobi Wallet",
    "platforms": ["iOS", "Android"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "BitKeep",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "OneKey",
    "platforms": ["iOS", "Android", "Hardware"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": "Native",
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Trustee Wallet",
    "platforms": ["iOS", "Android"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "XDEFI Wallet",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Coinomi",
    "platforms": ["iOS", "Android", "Windows", "Mac", "Linux"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Guarda",
    "platforms": ["iOS", "Android", "Windows", "Mac", "Linux", "Web"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": "Limited",
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "WalletConnect",
    "platforms": ["iOS", "Android", "Web"],
    "custodyModel": "Connector",
    "dexSwap": false,
    "nftGallery": false,
    "staking": false,
    "fiatOnramp": false,
    "fiatOfframp": false,
    "pushNotifications": false,
    "solanaPayQR": "Partial",
    "hardwareSupport": false,
    "openSource": true,
    "versionTested": "v2.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "NOW Wallet",
    "platforms": ["iOS", "Android"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": false,
    "fiatOnramp": true,
    "fiatOfframp": true,
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "CDP Wallets (Coinbase Developer Platform)",
    "platforms": ["Web", "API"],
    "custodyModel": "API/Developer",
    "dexSwap": false,
    "nftGallery": false,
    "staking": false,
    "fiatOnramp": false,
    "fiatOfframp": false,
    "pushNotifications": false,
    "solanaPayQR": "No",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "API v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Web3Auth",
    "platforms": ["Web", "API"],
    "custodyModel": "MPC",
    "dexSwap": false,
    "nftGallery": false,
    "staking": false,
    "fiatOnramp": false,
    "fiatOfframp": false,
    "pushNotifications": false,
    "solanaPayQR": "No",
    "hardwareSupport": false,
    "openSource": true,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Crossmint Custodial",
    "platforms": ["Web", "API"],
    "custodyModel": "Custodial",
    "dexSwap": false,
    "nftGallery": true,
    "staking": false,
    "fiatOnramp": true,
    "fiatOfframp": true,
    "pushNotifications": false,
    "solanaPayQR": "No",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Turnkey",
    "platforms": ["Web", "API"],
    "custodyModel": "Custodial/Developer",
    "dexSwap": false,
    "nftGallery": false,
    "staking": false,
    "fiatOnramp": false,
    "fiatOfframp": false,
    "pushNotifications": false,
    "solanaPayQR": "No",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "API v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Circle",
    "platforms": ["Web", "API"],
    "custodyModel": "Custodial/Developer",
    "dexSwap": false,
    "nftGallery": false,
    "staking": false,
    "fiatOnramp": true,
    "fiatOfframp": true,
    "pushNotifications": false,
    "solanaPayQR": "No",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "API v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Cake Wallet",
    "platforms": ["iOS", "Android"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": false,
    "fiatOnramp": true,
    "fiatOfframp": true,
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Enkrypt",
    "platforms": ["iOS", "Android", "Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": true,
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": false,
    "openSource": true,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Binance Web3 Wallet",
    "platforms": ["Web", "iOS", "Android"],
    "custodyModel": "Semi-custodial",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": true,
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Keystone",
    "platforms": ["Hardware"],
    "custodyModel": "Hardware",
    "dexSwap": false,
    "nftGallery": false,
    "staking": true,
    "fiatOnramp": false,
    "fiatOfframp": false,
    "pushNotifications": false,
    "solanaPayQR": "No",
    "hardwareSupport": "Native",
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Para",
    "platforms": ["Web", "API"],
    "custodyModel": "Developer",
    "dexSwap": false,
    "nftGallery": false,
    "staking": false,
    "fiatOnramp": false,
    "fiatOfframp": false,
    "pushNotifications": false,
    "solanaPayQR": "No",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "API v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Dynamic",
    "platforms": ["Web", "API"],
    "custodyModel": "Developer",
    "dexSwap": false,
    "nftGallery": false,
    "staking": false,
    "fiatOnramp": true,
    "fiatOfframp": true,
    "pushNotifications": false,
    "solanaPayQR": "No",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "API v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Gem Wallet",
    "platforms": ["Chrome", "Firefox", "Brave"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": true,
    "pushNotifications": true,
    "solanaPayQR": "Yes",
    "hardwareSupport": false,
    "openSource": true,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Privy",
    "platforms": ["Web", "API"],
    "custodyModel": "MPC",
    "dexSwap": false,
    "nftGallery": false,
    "staking": false,
    "fiatOnramp": false,
    "fiatOfframp": false,
    "pushNotifications": false,
    "solanaPayQR": "No",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "API v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Coin Wallet",
    "platforms": ["iOS", "Android", "Web"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": true,
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": false,
    "openSource": true,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Tiplink",
    "platforms": ["Web"],
    "custodyModel": "Self-custody",
    "dexSwap": false,
    "nftGallery": false,
    "staking": false,
    "fiatOnramp": false,
    "fiatOfframp": false,
    "pushNotifications": false,
    "solanaPayQR": "Yes",
    "hardwareSupport": false,
    "openSource": true,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Robinhood",
    "platforms": ["iOS", "Android"],
    "custodyModel": "Self-custody",
    "dexSwap": true,
    "nftGallery": true,
    "staking": true,
    "fiatOnramp": true,
    "fiatOfframp": true,
    "pushNotifications": true,
    "solanaPayQR": "Unknown",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Helium",
    "platforms": ["iOS", "Android"],
    "custodyModel": "Self-custody",
    "dexSwap": false,
    "nftGallery": false,
    "staking": true,
    "fiatOnramp": false,
    "fiatOfframp": false,
    "pushNotifications": false,
    "solanaPayQR": "No",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Trezor",
    "platforms": ["Hardware"],
    "custodyModel": "Hardware",
    "dexSwap": false,
    "nftGallery": false,
    "staking": true,
    "fiatOnramp": false,
    "fiatOfframp": false,
    "pushNotifications": false,
    "solanaPayQR": "No",
    "hardwareSupport": "Native",
    "openSource": true,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  },
  {
    "name": "Crossmint Non-Custodial",
    "platforms": ["Web", "API"],
    "custodyModel": "Non-custodial",
    "dexSwap": false,
    "nftGallery": true,
    "staking": false,
    "fiatOnramp": true,
    "fiatOfframp": true,
    "pushNotifications": false,
    "solanaPayQR": "No",
    "hardwareSupport": false,
    "openSource": false,
    "versionTested": "v1.0+",
    "dateTested": "2024-07-01",
    "monthlyUsers": "Unknown",
    "securityAudit": "Not Available"
  }
];

// Global state
let filteredWallets = [...walletData];
let selectedWallets = [];
let activeFilters = {
  search: '',
  platforms: [],
  solanaPayQR: [],
  features: [],
  custodyModel: [],
  securityAudit: []
};

// Utility functions
function generateWalletColor(name) {
  const colors = [
    '#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', 
    '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

function getWalletInitials(name) {
  return name.split(' ').map(word => word[0]).join('').toUpperCase();
}

function updateStats() {
  const totalWallets = filteredWallets.length;
  const solanaPayWallets = filteredWallets.filter(w => w.solanaPayQR === 'Yes' || w.solanaPayQR === 'Partial').length;
  const mobileWallets = filteredWallets.filter(w => 
    w.platforms.some(p => ['iOS', 'Android'].includes(p))
  ).length;
  const hardwareWallets = filteredWallets.filter(w => 
    w.platforms.includes('Hardware')
  ).length;

  document.getElementById('totalWallets').textContent = totalWallets;
  document.getElementById('solanaPayWallets').textContent = solanaPayWallets;
  document.getElementById('mobileWallets').textContent = mobileWallets;
  document.getElementById('hardwareWallets').textContent = hardwareWallets;
  document.getElementById('resultsCount').textContent = totalWallets;
}

function createWalletCard(wallet) {
  const isSelected = selectedWallets.includes(wallet.name);
  const walletLogo = walletLogos[wallet.name];
  const walletColor = generateWalletColor(wallet.name);
  
  return `
    <div class="wallet-card ${isSelected ? 'selected' : ''}" data-wallet="${wallet.name}">
      <input type="checkbox" class="wallet-select" ${isSelected ? 'checked' : ''}>
      <div class="wallet-header">
        <div class="wallet-icon">
          ${walletLogo ? 
            `<img src="${walletLogo}" alt="${wallet.name} logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />` : 
            ''
          }
          <div class="wallet-icon-fallback" style="background-color: ${walletColor}; display: ${walletLogo ? 'none' : 'flex'}">
            ${getWalletInitials(wallet.name)}
          </div>
        </div>
        <div>
          <h3 class="wallet-name">${wallet.name}</h3>
          <div class="wallet-platforms">
            ${wallet.platforms.slice(0, 3).map(platform => 
              `<span class="platform-badge">${platform}</span>`
            ).join('')}
            ${wallet.platforms.length > 3 ? `<span class="platform-badge">+${wallet.platforms.length - 3}</span>` : ''}
          </div>
        </div>
      </div>
      <div class="wallet-features">
        <span class="feature-badge solana-pay-${wallet.solanaPayQR.toLowerCase()}">
          Solana Pay: ${wallet.solanaPayQR}
        </span>
        ${wallet.dexSwap ? '<span class="feature-badge has-feature">DEX Swap</span>' : ''}
        ${wallet.nftGallery ? '<span class="feature-badge has-feature">NFT Gallery</span>' : ''}
        ${wallet.staking ? '<span class="feature-badge has-feature">Staking</span>' : ''}
      </div>
      <div class="wallet-actions">
        <button class="btn btn--primary view-details" data-wallet="${wallet.name}">
          View Details
        </button>
      </div>
    </div>
  `;
}

function renderWallets() {
  const walletGrid = document.getElementById('walletGrid');
  walletGrid.innerHTML = filteredWallets.map(createWalletCard).join('');
  
  // Add event listeners for checkboxes
  document.querySelectorAll('.wallet-select').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      e.stopPropagation();
      const walletName = e.target.closest('.wallet-card').dataset.wallet;
      const walletCard = e.target.closest('.wallet-card');
      
      if (e.target.checked) {
        if (!selectedWallets.includes(walletName)) {
          selectedWallets.push(walletName);
        }
        walletCard.classList.add('selected');
      } else {
        selectedWallets = selectedWallets.filter(name => name !== walletName);
        walletCard.classList.remove('selected');
      }
      updateCompareButton();
    });
  });

  // Add event listeners for view details buttons
  document.querySelectorAll('.view-details').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const walletName = btn.dataset.wallet;
      showWalletDetails(walletName);
    });
  });
}

function applyFilters() {
  filteredWallets = walletData.filter(wallet => {
    // Search filter
    if (activeFilters.search) {
      const searchTerm = activeFilters.search.toLowerCase();
      if (!wallet.name.toLowerCase().includes(searchTerm)) {
        return false;
      }
    }

    // Platform filter
    if (activeFilters.platforms.length > 0) {
      if (!activeFilters.platforms.some(platform => wallet.platforms.includes(platform))) {
        return false;
      }
    }

    // Solana Pay QR filter
    if (activeFilters.solanaPayQR.length > 0) {
      if (!activeFilters.solanaPayQR.includes(wallet.solanaPayQR)) {
        return false;
      }
    }

    // Features filter
    if (activeFilters.features.length > 0) {
      for (const feature of activeFilters.features) {
        if (feature === 'hardwareSupport' && !wallet.hardwareSupport) return false;
        if (feature !== 'hardwareSupport' && !wallet[feature]) return false;
      }
    }

    // Custody model filter
    if (activeFilters.custodyModel.length > 0) {
      if (!activeFilters.custodyModel.some(model => wallet.custodyModel.includes(model))) {
        return false;
      }
    }

    // Security audit filter
    if (activeFilters.securityAudit.length > 0) {
      const hasAudit = wallet.securityAudit && wallet.securityAudit !== 'Not Available';
      if (activeFilters.securityAudit.includes('Yes') && !hasAudit) return false;
      if (activeFilters.securityAudit.includes('No') && hasAudit) return false;
    }

    return true;
  });

  renderWallets();
  updateStats();
}

function updateCompareButton() {
  const compareBtn = document.getElementById('compareBtn');
  const compareCount = document.getElementById('compareCount');
  
  compareCount.textContent = selectedWallets.length;
  compareBtn.disabled = selectedWallets.length < 2;
}

function showWalletDetails(walletName) {
  const wallet = walletData.find(w => w.name === walletName);
  if (!wallet) return;

  const modal = document.getElementById('walletModal');
  const modalTitle = document.getElementById('walletModalTitle');
  const walletDetails = document.getElementById('walletDetails');
  const walletLogo = walletLogos[wallet.name];
  const walletColor = generateWalletColor(wallet.name);

  modalTitle.textContent = wallet.name;
  
  walletDetails.innerHTML = `
    <div class="wallet-detail-header">
      <div class="wallet-detail-icon">
        ${walletLogo ? 
          `<img src="${walletLogo}" alt="${wallet.name} logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />` : 
          ''
        }
        <div class="wallet-detail-icon-fallback" style="background-color: ${walletColor}; display: ${walletLogo ? 'none' : 'flex'}">
          ${getWalletInitials(wallet.name)}
        </div>
      </div>
      <div class="wallet-detail-info">
        <h3>${wallet.name}</h3>
        <p>Monthly Users: ${wallet.monthlyUsers}</p>
        <p>Last Tested: ${wallet.dateTested}</p>
      </div>
    </div>
    <div class="detail-grid">
      <div class="detail-item">
        <h4>Platforms</h4>
        <p>${wallet.platforms.join(', ')}</p>
      </div>
      <div class="detail-item">
        <h4>Custody Model</h4>
        <p>${wallet.custodyModel}</p>
      </div>
      <div class="detail-item">
        <h4>Solana Pay QR</h4>
        <p>${wallet.solanaPayQR}</p>
      </div>
      <div class="detail-item">
        <h4>DEX Swap</h4>
        <p>${wallet.dexSwap ? 'Yes' : 'No'}</p>
      </div>
      <div class="detail-item">
        <h4>NFT Gallery</h4>
        <p>${wallet.nftGallery ? 'Yes' : 'No'}</p>
      </div>
      <div class="detail-item">
        <h4>Staking</h4>
        <p>${wallet.staking ? 'Yes' : 'No'}</p>
      </div>
      <div class="detail-item">
        <h4>Fiat On-ramp</h4>
        <p>${wallet.fiatOnramp === true ? 'Yes' : wallet.fiatOnramp === false ? 'No' : wallet.fiatOnramp}</p>
      </div>
      <div class="detail-item">
        <h4>Fiat Off-ramp</h4>
        <p>${wallet.fiatOfframp === true ? 'Yes' : wallet.fiatOfframp === false ? 'No' : wallet.fiatOfframp}</p>
      </div>
      <div class="detail-item">
        <h4>Push Notifications</h4>
        <p>${wallet.pushNotifications === true ? 'Yes' : wallet.pushNotifications === false ? 'No' : wallet.pushNotifications}</p>
      </div>
      <div class="detail-item">
        <h4>Hardware Support</h4>
        <p>${wallet.hardwareSupport === true ? 'Yes' : wallet.hardwareSupport === false ? 'No' : wallet.hardwareSupport}</p>
      </div>
      <div class="detail-item">
        <h4>Open Source</h4>
        <p>${wallet.openSource === true ? 'Yes' : wallet.openSource === false ? 'No' : wallet.openSource}</p>
      </div>
      <div class="detail-item">
        <h4>Security Audit</h4>
        <p>${wallet.securityAudit}</p>
      </div>
      <div class="detail-item">
        <h4>Version Tested</h4>
        <p>${wallet.versionTested}</p>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function showComparison() {
  const modal = document.getElementById('comparisonModal');
  const comparisonTable = document.getElementById('comparisonTable');
  
  const selectedWalletData = selectedWallets.map(name => 
    walletData.find(w => w.name === name)
  );

  const features = [
    { key: 'platforms', label: 'Platforms' },
    { key: 'custodyModel', label: 'Custody Model' },
    { key: 'solanaPayQR', label: 'Solana Pay QR' },
    { key: 'dexSwap', label: 'DEX Swap' },
    { key: 'nftGallery', label: 'NFT Gallery' },
    { key: 'staking', label: 'Staking' },
    { key: 'fiatOnramp', label: 'Fiat On-ramp' },
    { key: 'fiatOfframp', label: 'Fiat Off-ramp' },
    { key: 'pushNotifications', label: 'Push Notifications' },
    { key: 'hardwareSupport', label: 'Hardware Support' },
    { key: 'openSource', label: 'Open Source' },
    { key: 'securityAudit', label: 'Security Audit' },
    { key: 'monthlyUsers', label: 'Monthly Users' },
    { key: 'versionTested', label: 'Version Tested' },
    { key: 'dateTested', label: 'Date Tested' }
  ];

  let tableHTML = '<table><thead><tr><th>Feature</th>';
  selectedWalletData.forEach(wallet => {
    tableHTML += `<th class="wallet-name-col">${wallet.name}</th>`;
  });
  tableHTML += '</tr></thead><tbody>';

  features.forEach(feature => {
    tableHTML += `<tr><td><strong>${feature.label}</strong></td>`;
    selectedWalletData.forEach(wallet => {
      let value = wallet[feature.key];
      if (typeof value === 'boolean') {
        value = value ? 'Yes' : 'No';
      } else if (Array.isArray(value)) {
        value = value.join(', ');
      }
      tableHTML += `<td>${value}</td>`;
    });
    tableHTML += '</tr>';
  });

  tableHTML += '</tbody></table>';
  comparisonTable.innerHTML = tableHTML;
  modal.classList.add('active');
}

function exportToCSV() {
  const headers = [
    'Name', 'Platforms', 'Custody Model', 'Solana Pay QR', 'DEX Swap', 'NFT Gallery',
    'Staking', 'Fiat On-ramp', 'Fiat Off-ramp', 'Push Notifications', 'Hardware Support',
    'Open Source', 'Security Audit', 'Monthly Users', 'Version Tested', 'Date Tested'
  ];

  let csv = headers.join(',') + '\n';
  
  filteredWallets.forEach(wallet => {
    const row = [
      wallet.name,
      `"${wallet.platforms.join(', ')}"`,
      wallet.custodyModel,
      wallet.solanaPayQR,
      wallet.dexSwap ? 'Yes' : 'No',
      wallet.nftGallery ? 'Yes' : 'No',
      wallet.staking ? 'Yes' : 'No',
      wallet.fiatOnramp === true ? 'Yes' : wallet.fiatOnramp === false ? 'No' : wallet.fiatOnramp,
      wallet.fiatOfframp === true ? 'Yes' : wallet.fiatOfframp === false ? 'No' : wallet.fiatOfframp,
      wallet.pushNotifications === true ? 'Yes' : wallet.pushNotifications === false ? 'No' : wallet.pushNotifications,
      wallet.hardwareSupport === true ? 'Yes' : wallet.hardwareSupport === false ? 'No' : wallet.hardwareSupport,
      wallet.openSource === true ? 'Yes' : wallet.openSource === false ? 'No' : wallet.openSource,
      wallet.securityAudit,
      wallet.monthlyUsers,
      wallet.versionTested,
      wallet.dateTested
    ];
    csv += row.join(',') + '\n';
  });

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'solana-wallets.csv';
  a.click();
  window.URL.revokeObjectURL(url);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Initialize
  renderWallets();
  updateStats();
  
  // Set last updated date
  document.getElementById('lastUpdated').textContent = new Date().toLocaleDateString();

  // Search functionality
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    activeFilters.search = e.target.value;
    applyFilters();
  });

  // Quick filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active class from all buttons
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      const filter = e.target.dataset.filter;
      
      // Clear all filters
      activeFilters = {
        search: '',
        platforms: [],
        solanaPayQR: [],
        features: [],
        custodyModel: [],
        securityAudit: []
      };
      
      // Clear search input
      searchInput.value = '';
      
      // Apply quick filter
      if (filter === 'mobile') {
        activeFilters.platforms = ['iOS', 'Android'];
      } else if (filter === 'desktop') {
        activeFilters.platforms = ['Windows', 'Mac', 'Linux', 'Chrome', 'Firefox', 'Brave', 'Edge'];
      } else if (filter === 'hardware') {
        activeFilters.platforms = ['Hardware'];
      } else if (filter === 'solana-pay') {
        activeFilters.solanaPayQR = ['Yes', 'Partial'];
      }
      
      applyFilters();
    });
  });

  // Advanced filter checkboxes
  document.querySelectorAll('.checkbox-group input').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const filterType = checkbox.closest('.form-group').querySelector('.form-label').textContent.toLowerCase();
      const value = checkbox.value;
      
      if (filterType.includes('platform')) {
        if (checkbox.checked) {
          activeFilters.platforms.push(value);
        } else {
          activeFilters.platforms = activeFilters.platforms.filter(p => p !== value);
        }
      } else if (filterType.includes('solana pay')) {
        if (checkbox.checked) {
          activeFilters.solanaPayQR.push(value);
        } else {
          activeFilters.solanaPayQR = activeFilters.solanaPayQR.filter(p => p !== value);
        }
      } else if (filterType.includes('features')) {
        if (checkbox.checked) {
          activeFilters.features.push(value);
        } else {
          activeFilters.features = activeFilters.features.filter(f => f !== value);
        }
      } else if (filterType.includes('custody')) {
        if (checkbox.checked) {
          activeFilters.custodyModel.push(value);
        } else {
          activeFilters.custodyModel = activeFilters.custodyModel.filter(c => c !== value);
        }
      } else if (filterType.includes('security')) {
        if (checkbox.checked) {
          activeFilters.securityAudit.push(value);
        } else {
          activeFilters.securityAudit = activeFilters.securityAudit.filter(s => s !== value);
        }
      }
      
      applyFilters();
    });
  });

  // Apply filters button
  document.getElementById('applyFilters').addEventListener('click', applyFilters);

  // Clear filters button
  document.getElementById('clearFilters').addEventListener('click', () => {
    activeFilters = {
      search: '',
      platforms: [],
      solanaPayQR: [],
      features: [],
      custodyModel: [],
      securityAudit: []
    };
    
    // Reset search input
    searchInput.value = '';
    
    // Reset all checkboxes
    document.querySelectorAll('.checkbox-group input').forEach(checkbox => {
      checkbox.checked = false;
    });
    
    // Reset quick filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
    
    applyFilters();
  });

  // Compare button
  document.getElementById('compareBtn').addEventListener('click', showComparison);

  // Export button
  document.getElementById('exportBtn').addEventListener('click', exportToCSV);

  // Modal close buttons
  document.getElementById('closeComparison').addEventListener('click', () => {
    document.getElementById('comparisonModal').classList.remove('active');
  });

  document.getElementById('closeWalletModal').addEventListener('click', () => {
    document.getElementById('walletModal').classList.remove('active');
  });

  // Close modals when clicking outside
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
});
