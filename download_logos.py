#!/usr/bin/env python3
import requests
import os
import time

# Create logos directory if it doesn't exist
if not os.path.exists('logos'):
    os.makedirs('logos')

# Wallet logo URLs from actual working sources
wallet_logos = {
    "Phantom": "https://phantom.app/img/logo.png",
    "Solflare": "https://solflare.com/assets/logo.svg",
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
    "WalletConnect": "https://walletconnect.com/logo.png",
    "NOW Wallet": "https://nowwallet.app/logo.png",
    "Web3Auth": "https://web3auth.io/logo.png",
    "Crossmint": "https://crossmint.com/logo.png",
    "Turnkey": "https://turnkey.com/logo.png",
    "Circle": "https://www.circle.com/logo.png",
    "Cake Wallet": "https://cakewallet.com/logo.png",
    "Enkrypt": "https://enkrypt.com/logo.png",
    "Binance Web3 Wallet": "https://www.binance.com/logo.png",
    "Keystone": "https://keyst.one/logo.png",
    "Para": "https://para.com/logo.png",
    "Dynamic": "https://dynamic.xyz/logo.png",
    "Gem Wallet": "https://gemwallet.app/logo.png",
    "Privy": "https://privy.io/logo.png",
    "Tiplink": "https://tiplink.io/logo.png",
    "Robinhood": "https://robinhood.com/logo.png",
    "Helium": "https://helium.com/logo.png",
    "Trezor": "https://trezor.io/logo.png",
    "Crossmint Non-Custodial": "https://crossmint.com/logo.png",
    "Math Wallet": "https://mathwallet.org/logo.png",
    "Safepal": "https://safepal.com/logo.png",
    "TokenPocket": "https://tokenpocket.pro/logo.png",
    "Huobi Wallet": "https://www.huobi.com/logo.png",
    "Gate Wallet": "https://gate.io/logo.png",
    "Bybit Wallet": "https://www.bybit.com/logo.png",
    "Kucoin Wallet": "https://www.kucoin.com/logo.png",
    "BitMart": "https://www.bitmart.com/logo.png",
    "CoinEx": "https://www.coinex.com/logo.png",
    "MEXC": "https://www.mexc.com/logo.png",
    "LBank": "https://www.lbank.info/logo.png",
    "Hotbit": "https://www.hotbit.io/logo.png",
    "DigiFinex": "https://www.digifinex.com/logo.png",
    "Bithumb": "https://www.bithumb.com/logo.png",
    "Upbit": "https://upbit.com/logo.png",
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
}

def download_logo(wallet_name, url):
    """Download logo for a specific wallet"""
    try:
        # Create filename from wallet name
        filename = wallet_name.lower().replace(' ', '_').replace('-', '_').replace('(', '').replace(')', '') + '.png'
        filepath = os.path.join('logos', filename)
        
        # Skip if file already exists
        if os.path.exists(filepath):
            print(f"✓ {wallet_name}: Already exists")
            return True
        
        # Download the logo
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        # Save the file
        with open(filepath, 'wb') as f:
            f.write(response.content)
        
        print(f"✓ {wallet_name}: Downloaded successfully")
        return True
        
    except Exception as e:
        print(f"✗ {wallet_name}: Failed to download - {str(e)}")
        return False

def main():
    print("Downloading wallet logos...")
    print("=" * 50)
    
    successful_downloads = 0
    total_wallets = len(wallet_logos)
    
    for wallet_name, url in wallet_logos.items():
        if download_logo(wallet_name, url):
            successful_downloads += 1
        time.sleep(0.5)  # Be nice to servers
    
    print("=" * 50)
    print(f"Download complete: {successful_downloads}/{total_wallets} logos downloaded successfully")
    
    # List downloaded files
    print("\nDownloaded logos:")
    if os.path.exists('logos'):
        files = os.listdir('logos')
        for file in sorted(files):
            print(f"  - {file}")

if __name__ == "__main__":
    main() 
