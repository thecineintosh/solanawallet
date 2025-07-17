#!/usr/bin/env python3
import requests
import os
import time

# Create logos directory if it doesn't exist
if not os.path.exists('logos'):
    os.makedirs('logos')

# Alternative logo URLs from various sources (GitHub, CDNs, etc.)
missing_wallet_logos = {
    # Major Solana wallets with alternative sources
    "Backpack": "https://raw.githubusercontent.com/coral-xyz/backpack/master/packages/app-extension/src/components/Icon/BackpackIcon.tsx",
    "Glow": "https://glow.app/favicon.ico",
    "Decaf": "https://decaf.so/favicon.ico",
    "Jupiter Wallet": "https://jup.ag/favicon.ico",
    "Slope": "https://slope.finance/favicon.ico",
    "Coin98": "https://coin98.com/favicon.ico",
    
    # Trust Wallet and major wallets
    "Trust Wallet": "https://trustwallet.com/favicon.ico",
    "Exodus": "https://exodus.com/favicon.ico",
    "Atomic Wallet": "https://atomicwallet.io/favicon.ico",
    "Coinbase Wallet": "https://wallet.coinbase.com/favicon.ico",
    "Brave Wallet": "https://brave.com/favicon.ico",
    "Ledger Nano X": "https://www.ledger.com/favicon.ico",
    "OKX Wallet": "https://www.okx.com/favicon.ico",
    "Bitget Wallet": "https://web3.bitget.com/favicon.ico",
    
    # Other wallets with favicon sources
    "NOW Wallet": "https://nowwallet.app/favicon.ico",
    "Web3Auth": "https://web3auth.io/favicon.ico",
    "Crossmint": "https://crossmint.com/favicon.ico",
    "Turnkey": "https://turnkey.com/favicon.ico",
    "Circle": "https://www.circle.com/favicon.ico",
    "Cake Wallet": "https://cakewallet.com/favicon.ico",
    "Enkrypt": "https://enkrypt.com/favicon.ico",
    "Binance Web3 Wallet": "https://www.binance.com/favicon.ico",
    "Para": "https://para.com/favicon.ico",
    "Dynamic": "https://dynamic.xyz/favicon.ico",
    "Gem Wallet": "https://gemwallet.app/favicon.ico",
    "Privy": "https://privy.io/favicon.ico",
    "Tiplink": "https://tiplink.io/favicon.ico",
    "Helium": "https://helium.com/favicon.ico",
    "Trezor": "https://trezor.io/favicon.ico",
    "Crossmint Non-Custodial": "https://crossmint.com/favicon.ico",
    "Math Wallet": "https://mathwallet.org/favicon.ico",
    "Safepal": "https://safepal.com/favicon.ico",
    "Huobi Wallet": "https://www.huobi.com/favicon.ico",
    "Gate Wallet": "https://gate.io/favicon.ico",
    "BitMart": "https://www.bitmart.com/favicon.ico",
    "CoinEx": "https://www.coinex.com/favicon.ico",
    "MEXC": "https://www.mexc.com/favicon.ico",
    "DigiFinex": "https://www.digifinex.com/favicon.ico",
    "Bithumb": "https://www.bithumb.com/favicon.ico",
    "Bittrex": "https://bittrex.com/favicon.ico",
    "Kraken": "https://kraken.com/favicon.ico",
    "Gemini": "https://gemini.com/favicon.ico",
    "Binance": "https://binance.com/favicon.ico",
    "Coinbase": "https://coinbase.com/favicon.ico",
    "Kraken Pro": "https://pro.kraken.com/favicon.ico",
    "Bitfinex": "https://www.bitfinex.com/favicon.ico",
    "Bitstamp": "https://www.bitstamp.net/favicon.ico",
    "Crypto.com": "https://crypto.com/favicon.ico",
    "Voyager": "https://invest.voyager.com/favicon.ico",
    "BlockFi": "https://blockfi.com/favicon.ico",
    "Celsius": "https://celsius.network/favicon.ico",
    "Nexo": "https://nexo.io/favicon.ico",
    "Crypto.com DeFi Wallet": "https://crypto.com/favicon.ico",
    "Trust Wallet DeFi": "https://trustwallet.com/favicon.ico",
    "MetaMask": "https://metamask.io/favicon.ico",
    "Rainbow": "https://rainbow.me/favicon.ico",
    "Argent": "https://argent.xyz/favicon.ico",
    "Gnosis Safe": "https://gnosis-safe.io/favicon.ico",
    "Tally Ho": "https://tally.cash/favicon.ico",
    "Frame": "https://frame.sh/favicon.ico",
    "Trezor Suite": "https://trezor.io/favicon.ico",
    "Ledger Live": "https://www.ledger.com/favicon.ico",
    "Electrum": "https://electrum.org/favicon.ico",
    "Wasabi": "https://wasabiwallet.io/favicon.ico",
    "Samourai": "https://samouraiwallet.com/favicon.ico",
    "BlueWallet": "https://bluewallet.io/favicon.ico",
    "Casa": "https://casa.co/favicon.ico",
    "Unchained": "https://unchained.com/favicon.ico",
    "Swan": "https://swan.com/favicon.ico",
    "River": "https://river.com/favicon.ico",
    "Strike": "https://strike.me/favicon.ico",
    "Cash App": "https://cash.app/favicon.ico",
    "Venmo": "https://venmo.com/favicon.ico",
    "PayPal": "https://paypal.com/favicon.ico",
    "Square": "https://square.com/favicon.ico",
    "Stripe": "https://stripe.com/favicon.ico",
    "Plaid": "https://plaid.com/favicon.ico",
    "Yodlee": "https://yodlee.com/favicon.ico",
    "Finicity": "https://finicity.com/favicon.ico",
    "MX": "https://mx.com/favicon.ico",
    "Quovo": "https://quovo.com/favicon.ico",
    "Akoya": "https://akoya.com/favicon.ico"
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
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, timeout=10, headers=headers)
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
    print("Downloading missing wallet logos...")
    print("=" * 50)
    
    successful_downloads = 0
    total_wallets = len(missing_wallet_logos)
    
    for wallet_name, url in missing_wallet_logos.items():
        if download_logo(wallet_name, url):
            successful_downloads += 1
        time.sleep(1)  # Be nice to servers
    
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
