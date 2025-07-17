// Wallet logos with local files for all wallets
const walletLogos = {
  // All wallets now have local logo files
  "Phantom": "logos/phantom.png",
  "Solflare": "logos/solflare.svg",
  "Keystone": "logos/keystone.png",
  "Robinhood": "logos/robinhood.png",
  "Hotbit": "logos/hotbit.png",
  "Kucoin Wallet": "logos/kucoin_wallet.png",
  "Bybit Wallet": "logos/bybit_wallet.png",
  "WalletConnect": "logos/walletconnect.png",
  "Web3Auth": "logos/web3auth.png",
  "Upbit": "logos/upbit.png",
  "TokenPocket": "logos/tokenpocket.png",
  "LBank": "logos/lbank.png",
  "Jupiter Wallet": "logos/jupiter_wallet.png",
  "Trust Wallet": "logos/trust_wallet.png",
  "Exodus": "logos/exodus.png",
  "Coinbase Wallet": "logos/coinbase_wallet.png",
  "Brave Wallet": "logos/brave_wallet.png",
  "Ledger Nano X": "logos/ledger_nano_x.png",
  "OKX Wallet": "logos/okx_wallet.png",
  "Bitget Wallet": "logos/bitget_wallet.png",
  "Crossmint": "logos/crossmint.png",
  "Enkrypt": "logos/enkrypt.png",
  "Binance Web3 Wallet": "logos/binance_web3_wallet.png",
  "Para": "logos/para.png",
  "Tiplink": "logos/tiplink.png",
  "Trezor": "logos/trezor.png",
  "Crossmint Non-Custodial": "logos/crossmint_non_custodial.png",
  "Safepal": "logos/safepal.png",
  "Huobi Wallet": "logos/huobi_wallet.png",
  "BitMart": "logos/bitmart.png",
  "CoinEx": "logos/coinex.png",
  "Bithumb": "logos/bithumb.png",
  "Bittrex": "logos/bittrex.png",
  "Gemini": "logos/gemini.png",
  "Binance": "logos/binance.png",
  "Coinbase": "logos/coinbase.png",
  "Bitstamp": "logos/bitstamp.png",
  "Crypto.com": "logos/crypto.com.png",
  "BlockFi": "logos/blockfi.png",
  "Celsius": "logos/celsius.png",
  "Nexo": "logos/nexo.png",
  "Crypto.com DeFi Wallet": "logos/crypto.com_defi_wallet.png",
  "Trust Wallet DeFi": "logos/trust_wallet_defi.png",
  "MetaMask": "logos/metamask.png",
  "Rainbow": "logos/rainbow.png",
  "Gnosis Safe": "logos/gnosis_safe.png",
  "Trezor Suite": "logos/trezor_suite.png",
  "Ledger Live": "logos/ledger_live.png",
  "Electrum": "logos/electrum.png",
  "Samourai": "logos/samourai.png",
  "Swan": "logos/swan.png",
  "River": "logos/river.png",
  "Strike": "logos/strike.png",
  "Cash App": "logos/cash_app.png",
  "Venmo": "logos/venmo.png",
  "PayPal": "logos/paypal.png",
  "Square": "logos/square.png",
  "Stripe": "logos/stripe.png",
  "Finicity": "logos/finicity.png",
  "MX": "logos/mx.png",
  "Akoya": "logos/akoya.png",
  
  // Newly added wallets with local logos (including placeholders)
  "Backpack": "logos/backpack.png",
  "Glow": "logos/glow.png",
  "Decaf": "logos/decaf.png",
  "Slope": "logos/slope.png",
  "Coin98": "logos/coin98.png",
  "Atomic Wallet": "logos/atomic_wallet.png",
  "NOW Wallet": "logos/now_wallet.png",
  "Turnkey": "logos/turnkey.png",
  "Circle": "logos/circle.png",
  "Cake Wallet": "logos/cake_wallet.png",
  "Dynamic": "logos/dynamic.png",
  "Gem Wallet": "logos/gem_wallet.png",
  "Privy": "logos/privy.png",
  "Helium": "logos/helium.png",
  "Math Wallet": "logos/math_wallet.png",
  "Gate Wallet": "logos/gate_wallet.png",
  "MEXC": "logos/mexc.png",
  "DigiFinex": "logos/digifinex.png",
  "Kraken": "logos/kraken.png",
  "Kraken Pro": "logos/kraken_pro.png",
  "Bitfinex": "logos/bitfinex.png",
  "Voyager": "logos/voyager.png",
  "Argent": "logos/argent.png",
  "Tally Ho": "logos/tally_ho.png",
  "Frame": "logos/frame.png",
  "Wasabi": "logos/wasabi.png",
  "BlueWallet": "logos/bluewallet.png",
  "Casa": "logos/casa.png",
  "Unchained": "logos/unchained.png",
  "Plaid": "logos/plaid.png",
  "Yodlee": "logos/yodlee.png",
  "Quovo": "logos/quovo.png"
};

// Fallback function to get wallet logo with error handling
function getWalletLogo(walletName) {
  const logoUrl = walletLogos[walletName];
  if (!logoUrl) {
    return null;
  }
  
  // Return the logo URL - the HTML will handle loading errors
  return logoUrl;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { walletLogos, getWalletLogo };
} 
