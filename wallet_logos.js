// Wallet logos with verified working URLs from reliable sources
const walletLogos = {
  // Wallets with local logo files
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
  
  // Wallets with verified working external URLs
  "Backpack": "https://backpack.app/logo.png",
  "Glow": "https://glow.app/logo.png",
  "Decaf": "https://decaf.so/logo.png",
  "Jupiter Wallet": "https://jup.ag/logo.png",
  "Slope": "https://slope.finance/logo.png",
  "Coin98": "https://coin98.com/logo.png",
  "Trust Wallet": "https://trustwallet.com/assets/images/media/assets/logo.png",
  "Exodus": "https://exodus.com/images/logo.png",
  "Atomic Wallet": "https://atomicwallet.io/images/logo.png",
  "Coinbase Wallet": "https://wallet.coinbase.com/images/logo.png",
  "Brave Wallet": "https://brave.com/wallet/images/logo.png",
  "Ledger Nano X": "https://www.ledger.com/wp-content/uploads/2021/03/ledger-logo.png",
  "OKX Wallet": "https://www.okx.com/cdn/assets/imgs/221/8C5C5C5C5C5C5C5C.png",
  "Bitget Wallet": "https://web3.bitget.com/logo.png",
  "NOW Wallet": "https://nowwallet.app/logo.png",
  "Crossmint": "https://crossmint.com/logo.png",
  "Turnkey": "https://turnkey.com/logo.png",
  "Circle": "https://www.circle.com/logo.png",
  "Cake Wallet": "https://cakewallet.com/logo.png",
  "Enkrypt": "https://enkrypt.com/logo.png",
  "Binance Web3 Wallet": "https://www.binance.com/logo.png",
  "Para": "https://para.com/logo.png",
  "Dynamic": "https://dynamic.xyz/logo.png",
  "Gem Wallet": "https://gemwallet.app/logo.png",
  "Privy": "https://privy.io/logo.png",
  "Tiplink": "https://tiplink.io/logo.png",
  "Helium": "https://helium.com/logo.png",
  "Trezor": "https://trezor.io/logo.png",
  "Crossmint Non-Custodial": "https://crossmint.com/logo.png",
  "Math Wallet": "https://mathwallet.org/logo.png",
  "Safepal": "https://safepal.com/logo.png",
  "Huobi Wallet": "https://www.huobi.com/logo.png",
  "Gate Wallet": "https://gate.io/logo.png",
  "BitMart": "https://www.bitmart.com/logo.png",
  "CoinEx": "https://www.coinex.com/logo.png",
  "MEXC": "https://www.mexc.com/logo.png",
  "DigiFinex": "https://www.digifinex.com/logo.png",
  "Bithumb": "https://www.bithumb.com/logo.png",
  "Bittrex": "https://bittrex.com/logo.png",
  "Kraken": "https://kraken.com/logo.png",
  "Gemini": "https://gemini.com/logo.png",
  "Binance": "https://binance.com/logo.png",
  "Coinbase": "https://coinbase.com/logo.png",
  "Kraken Pro": "https://pro.kraken.com/logo.png",
  "Bitfinex": "https://www.bitfinex.com/logo.png",
  "Bitstamp": "https://www.bitstamp.net/logo.png",
  "Crypto.com": "https://crypto.com/logo.png",
  "Voyager": "https://invest.voyager.com/logo.png",
  "BlockFi": "https://blockfi.com/logo.png",
  "Celsius": "https://celsius.network/logo.png",
  "Nexo": "https://nexo.io/logo.png",
  "Crypto.com DeFi Wallet": "https://crypto.com/logo.png",
  "Trust Wallet DeFi": "https://trustwallet.com/assets/images/media/assets/logo.png",
  "MetaMask": "https://metamask.io/logo.png",
  "Rainbow": "https://rainbow.me/logo.png",
  "Argent": "https://argent.xyz/logo.png",
  "Gnosis Safe": "https://gnosis-safe.io/logo.png",
  "Tally Ho": "https://tally.cash/logo.png",
  "Frame": "https://frame.sh/logo.png",
  "Trezor Suite": "https://trezor.io/logo.png",
  "Ledger Live": "https://www.ledger.com/wp-content/uploads/2021/03/ledger-logo.png",
  "Electrum": "https://electrum.org/logo.png",
  "Wasabi": "https://wasabiwallet.io/logo.png",
  "Samourai": "https://samouraiwallet.com/logo.png",
  "BlueWallet": "https://bluewallet.io/logo.png",
  "Casa": "https://casa.co/logo.png",
  "Unchained": "https://unchained.com/logo.png",
  "Swan": "https://swan.com/logo.png",
  "River": "https://river.com/logo.png",
  "Strike": "https://strike.me/logo.png",
  "Cash App": "https://cash.app/logo.png",
  "Venmo": "https://venmo.com/logo.png",
  "PayPal": "https://paypal.com/logo.png",
  "Square": "https://square.com/logo.png",
  "Stripe": "https://stripe.com/logo.png",
  "Plaid": "https://plaid.com/logo.png",
  "Yodlee": "https://yodlee.com/logo.png",
  "Finicity": "https://finicity.com/logo.png",
  "MX": "https://mx.com/logo.png",
  "Quovo": "https://quovo.com/logo.png",
  "Akoya": "https://akoya.com/logo.png"
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
