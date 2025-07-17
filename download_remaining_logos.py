#!/usr/bin/env python3
import requests
import os
import time

# Create logos directory if it doesn't exist
if not os.path.exists('logos'):
    os.makedirs('logos')

# Remaining wallets that need logos - using alternative sources
remaining_wallet_logos = {
    # Major Solana wallets with alternative sources
    "Backpack": "https://raw.githubusercontent.com/coral-xyz/backpack/master/packages/app-extension/src/components/Icon/BackpackIcon.tsx",
    "Glow": "https://glow.app/favicon.ico",
    "Decaf": "https://decaf.so/favicon.ico",
    "Slope": "https://slope.finance/favicon.ico",
    "Coin98": "https://coin98.com/favicon.ico",
    
    # Other wallets with alternative sources
    "Atomic Wallet": "https://atomicwallet.io/favicon.ico",
    "NOW Wallet": "https://nowwallet.app/favicon.ico",
    "Turnkey": "https://turnkey.com/favicon.ico",
    "Circle": "https://www.circle.com/favicon.ico",
    "Cake Wallet": "https://cakewallet.com/favicon.ico",
    "Dynamic": "https://dynamic.xyz/favicon.ico",
    "Gem Wallet": "https://gemwallet.app/favicon.ico",
    "Privy": "https://privy.io/favicon.ico",
    "Helium": "https://helium.com/favicon.ico",
    "Math Wallet": "https://mathwallet.org/favicon.ico",
    "Gate Wallet": "https://gate.io/favicon.ico",
    "MEXC": "https://www.mexc.com/favicon.ico",
    "DigiFinex": "https://www.digifinex.com/favicon.ico",
    "Kraken": "https://kraken.com/favicon.ico",
    "Kraken Pro": "https://pro.kraken.com/favicon.ico",
    "Bitfinex": "https://www.bitfinex.com/favicon.ico",
    "Voyager": "https://invest.voyager.com/favicon.ico",
    "Argent": "https://argent.xyz/favicon.ico",
    "Tally Ho": "https://tally.cash/favicon.ico",
    "Frame": "https://frame.sh/favicon.ico",
    "Wasabi": "https://wasabiwallet.io/favicon.ico",
    "BlueWallet": "https://bluewallet.io/favicon.ico",
    "Casa": "https://casa.co/favicon.ico",
    "Unchained": "https://unchained.com/favicon.ico",
    "Plaid": "https://plaid.com/favicon.ico",
    "Yodlee": "https://yodlee.com/favicon.ico",
    "Quovo": "https://quovo.com/favicon.ico"
}

# Alternative URLs for wallets that might have different paths
alternative_urls = {
    "Backpack": [
        "https://backpack.app/favicon.ico",
        "https://backpack.app/logo.png",
        "https://backpack.app/assets/logo.png"
    ],
    "Glow": [
        "https://glow.app/assets/logo.png",
        "https://glow.app/images/logo.png"
    ],
    "Decaf": [
        "https://decaf.so/assets/logo.png",
        "https://decaf.so/images/logo.png"
    ],
    "Slope": [
        "https://slope.finance/assets/logo.png",
        "https://slope.finance/images/logo.png"
    ],
    "Coin98": [
        "https://coin98.com/assets/logo.png",
        "https://coin98.com/images/logo.png"
    ],
    "Atomic Wallet": [
        "https://atomicwallet.io/assets/logo.png",
        "https://atomicwallet.io/images/logo.png"
    ],
    "NOW Wallet": [
        "https://nowwallet.app/assets/logo.png",
        "https://nowwallet.app/images/logo.png"
    ],
    "Turnkey": [
        "https://turnkey.com/assets/logo.png",
        "https://turnkey.com/images/logo.png"
    ],
    "Circle": [
        "https://www.circle.com/assets/logo.png",
        "https://www.circle.com/images/logo.png"
    ],
    "Cake Wallet": [
        "https://cakewallet.com/assets/logo.png",
        "https://cakewallet.com/images/logo.png"
    ],
    "Dynamic": [
        "https://dynamic.xyz/assets/logo.png",
        "https://dynamic.xyz/images/logo.png"
    ],
    "Gem Wallet": [
        "https://gemwallet.app/assets/logo.png",
        "https://gemwallet.app/images/logo.png"
    ],
    "Privy": [
        "https://privy.io/assets/logo.png",
        "https://privy.io/images/logo.png"
    ],
    "Helium": [
        "https://helium.com/assets/logo.png",
        "https://helium.com/images/logo.png"
    ],
    "Math Wallet": [
        "https://mathwallet.org/assets/logo.png",
        "https://mathwallet.org/images/logo.png"
    ],
    "Gate Wallet": [
        "https://gate.io/assets/logo.png",
        "https://gate.io/images/logo.png"
    ],
    "MEXC": [
        "https://www.mexc.com/assets/logo.png",
        "https://www.mexc.com/images/logo.png"
    ],
    "DigiFinex": [
        "https://www.digifinex.com/assets/logo.png",
        "https://www.digifinex.com/images/logo.png"
    ],
    "Kraken": [
        "https://kraken.com/assets/logo.png",
        "https://kraken.com/images/logo.png"
    ],
    "Kraken Pro": [
        "https://pro.kraken.com/assets/logo.png",
        "https://pro.kraken.com/images/logo.png"
    ],
    "Bitfinex": [
        "https://www.bitfinex.com/assets/logo.png",
        "https://www.bitfinex.com/images/logo.png"
    ],
    "Voyager": [
        "https://invest.voyager.com/assets/logo.png",
        "https://invest.voyager.com/images/logo.png"
    ],
    "Argent": [
        "https://argent.xyz/assets/logo.png",
        "https://argent.xyz/images/logo.png"
    ],
    "Tally Ho": [
        "https://tally.cash/assets/logo.png",
        "https://tally.cash/images/logo.png"
    ],
    "Frame": [
        "https://frame.sh/assets/logo.png",
        "https://frame.sh/images/logo.png"
    ],
    "Wasabi": [
        "https://wasabiwallet.io/assets/logo.png",
        "https://wasabiwallet.io/images/logo.png"
    ],
    "BlueWallet": [
        "https://bluewallet.io/assets/logo.png",
        "https://bluewallet.io/images/logo.png"
    ],
    "Casa": [
        "https://casa.co/assets/logo.png",
        "https://casa.co/images/logo.png"
    ],
    "Unchained": [
        "https://unchained.com/assets/logo.png",
        "https://unchained.com/images/logo.png"
    ],
    "Plaid": [
        "https://plaid.com/assets/logo.png",
        "https://plaid.com/images/logo.png"
    ],
    "Yodlee": [
        "https://yodlee.com/assets/logo.png",
        "https://yodlee.com/images/logo.png"
    ],
    "Quovo": [
        "https://quovo.com/assets/logo.png",
        "https://quovo.com/images/logo.png"
    ]
}

def download_logo(wallet_name, urls):
    """Download logo for a specific wallet trying multiple URLs"""
    try:
        # Create filename from wallet name
        filename = wallet_name.lower().replace(' ', '_').replace('-', '_').replace('(', '').replace(')', '') + '.png'
        filepath = os.path.join('logos', filename)
        
        # Skip if file already exists
        if os.path.exists(filepath):
            print(f"✓ {wallet_name}: Already exists")
            return True
        
        # Try each URL until one works
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        for url in urls:
            try:
                print(f"  Trying {url} for {wallet_name}...")
                response = requests.get(url, timeout=10, headers=headers)
                response.raise_for_status()
                
                # Save the file
                with open(filepath, 'wb') as f:
                    f.write(response.content)
                
                print(f"✓ {wallet_name}: Downloaded successfully from {url}")
                return True
                
            except Exception as e:
                print(f"    Failed: {str(e)}")
                continue
        
        print(f"✗ {wallet_name}: All URLs failed")
        return False
        
    except Exception as e:
        print(f"✗ {wallet_name}: Failed to download - {str(e)}")
        return False

def main():
    print("Downloading remaining wallet logos...")
    print("=" * 50)
    
    successful_downloads = 0
    total_wallets = len(remaining_wallet_logos)
    
    for wallet_name, primary_url in remaining_wallet_logos.items():
        print(f"\nProcessing {wallet_name}...")
        
        # Get all URLs to try for this wallet
        urls_to_try = [primary_url]
        if wallet_name in alternative_urls:
            urls_to_try.extend(alternative_urls[wallet_name])
        
        if download_logo(wallet_name, urls_to_try):
            successful_downloads += 1
        
        time.sleep(1)  # Be nice to servers
    
    print("\n" + "=" * 50)
    print(f"Download complete: {successful_downloads}/{total_wallets} logos downloaded successfully")
    
    # List downloaded files
    print("\nDownloaded logos:")
    if os.path.exists('logos'):
        files = os.listdir('logos')
        for file in sorted(files):
            print(f"  - {file}")

if __name__ == "__main__":
    main() 
