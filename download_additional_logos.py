#!/usr/bin/env python3
import requests
import os
import time

# Create logos directory if it doesn't exist
if not os.path.exists('logos'):
    os.makedirs('logos')

# Additional wallets that need logos
additional_wallets = {
    "Atomic Wallet": [
        "https://atomicwallet.io/favicon.ico",
        "https://atomicwallet.io/assets/logo.png",
        "https://atomicwallet.io/images/logo.png",
        "https://atomicwallet.io/static/img/logo.png"
    ],
    "Glow": [
        "https://glow.app/favicon.ico",
        "https://glow.app/assets/logo.png",
        "https://glow.app/images/logo.png",
        "https://glow.app/static/img/logo.png"
    ],
    "Torus": [
        "https://toruswallet.io/favicon.ico",
        "https://toruswallet.io/assets/logo.png",
        "https://toruswallet.io/images/logo.png",
        "https://toruswallet.io/static/img/logo.png"
    ],
    "Jupiter Mobile": [
        "https://jup.ag/favicon.ico",
        "https://jup.ag/assets/logo.png",
        "https://jup.ag/images/logo.png",
        "https://jupiter.wallet/favicon.ico"
    ],
    "Fuse": [
        "https://fuse.io/favicon.ico",
        "https://fuse.io/assets/logo.png",
        "https://fuse.io/images/logo.png",
        "https://fuse.io/static/img/logo.png"
    ],
    "Nightly": [
        "https://nightly.app/favicon.ico",
        "https://nightly.app/assets/logo.png",
        "https://nightly.app/images/logo.png",
        "https://nightly.app/static/img/logo.png"
    ]
}

def download_logo(wallet_name, urls):
    """Download logo for a specific wallet trying multiple URLs"""
    try:
        # Create filename
        filename = wallet_name.lower().replace(' ', '_').replace('-', '_').replace('(', '').replace(')', '') + '.png'
        filepath = os.path.join('logos', filename)
        
        # Skip if file already exists and is not too small
        if os.path.exists(filepath) and os.path.getsize(filepath) > 1000:
            print(f"✓ {wallet_name}: Already exists with good size")
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
                
                # Check if we got actual content
                if len(response.content) > 1000:  # At least 1KB
                    # Save the file
                    with open(filepath, 'wb') as f:
                        f.write(response.content)
                    
                    print(f"✓ {wallet_name}: Downloaded successfully from {url}")
                    print(f"  File size: {len(response.content)} bytes")
                    return True
                else:
                    print(f"    Failed: File too small ({len(response.content)} bytes)")
                    
            except Exception as e:
                print(f"    Failed: {str(e)}")
                continue
        
        print(f"✗ {wallet_name}: All URLs failed")
        return False
        
    except Exception as e:
        print(f"✗ {wallet_name}: Failed to download - {str(e)}")
        return False

def main():
    print("Downloading additional wallet logos...")
    print("=" * 50)
    
    successful_downloads = 0
    total_wallets = len(additional_wallets)
    
    for wallet_name, urls in additional_wallets.items():
        print(f"\nProcessing {wallet_name}...")
        if download_logo(wallet_name, urls):
            successful_downloads += 1
        time.sleep(1)  # Be nice to servers
    
    print("\n" + "=" * 50)
    print(f"Download complete: {successful_downloads}/{total_wallets} logos downloaded successfully")
    
    # List downloaded files
    print("\nDownloaded logos:")
    if os.path.exists('logos'):
        for wallet_name in additional_wallets.keys():
            filename = wallet_name.lower().replace(' ', '_').replace('-', '_').replace('(', '').replace(')', '') + '.png'
            filepath = os.path.join('logos', filename)
            if os.path.exists(filepath):
                size = os.path.getsize(filepath)
                print(f"  - {filename}: {size} bytes")

if __name__ == "__main__":
    main() 
