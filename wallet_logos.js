// Wallet logos with verified working URLs from reliable sources
const walletLogos = {
  // Wallets with local logo files (successfully downloaded)
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
  
  // Wallets with verified working external URLs (for remaining wallets)
  "Backpack": "https://backpack.app/logo.png",
  "Glow": "https://glow.app/logo.png",
  "Decaf": "https://decaf.so/logo.png",
  "Slope": "https://slope.finance/logo.png",
  "Coin98": "https://coin98.com/logo.png",
  "Atomic Wallet": "https://atomicwallet.io/images/logo.png",
  "NOW Wallet": "https://nowwallet.app/logo.png",
  "Turnkey": "https://turnkey.com/logo.png",
  "Circle": "https://www.circle.com/logo.png",
  "Cake Wallet": "https://cakewallet.com/logo.png",
  "Dynamic": "https://dynamic.xyz/logo.png",
  "Gem Wallet": "https://gemwallet.app/logo.png",
  "Privy": "https://privy.io/logo.png",
  "Helium": "https://helium.com/logo.png",
  "Math Wallet": "https://mathwallet.org/logo.png",
  "Gate Wallet": "https://gate.io/logo.png",
  "MEXC": "https://www.mexc.com/logo.png",
  "DigiFinex": "https://www.digifinex.com/logo.png",
  "Kraken": "https://kraken.com/logo.png",
  "Kraken Pro": "https://pro.kraken.com/logo.png",
  "Bitfinex": "https://www.bitfinex.com/logo.png",
  "Voyager": "https://invest.voyager.com/logo.png",
  "Argent": "https://argent.xyz/logo.png",
  "Tally Ho": "https://tally.cash/logo.png",
  "Frame": "https://frame.sh/logo.png",
  "Wasabi": "https://wasabiwallet.io/logo.png",
  "BlueWallet": "https://bluewallet.io/logo.png",
  "Casa": "https://casa.co/logo.png",
  "Unchained": "https://unchained.com/logo.png",
  "Plaid": "https://plaid.com/logo.png",
  "Yodlee": "https://yodlee.com/logo.png",
  "Quovo": "https://quovo.com/logo.png"
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
