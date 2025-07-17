#!/usr/bin/env python3
import requests
import os

# Create logos directory if it doesn't exist
if not os.path.exists('logos'):
    os.makedirs('logos')

# Alternative Phantom logo URLs
phantom_urls = [
    "https://raw.githubusercontent.com/solana-labs/wallet-adapter/master/packages/wallets/icons/phantom.png",
    "https://raw.githubusercontent.com/solana-labs/wallet-adapter/master/packages/wallets/icons/phantom.svg",
    "https://cdn.jsdelivr.net/gh/solana-labs/wallet-adapter@master/packages/wallets/icons/phantom.png",
    "https://unpkg.com/@solana/wallet-adapter-wallets@0.9.23/lib/icons/phantom.png",
    "https://registry.npmjs.org/@solana/wallet-adapter-wallets/-/wallet-adapter-wallets-0.9.23.tgz",
    "https://phantom.app/static/img/logo.png",
    "https://phantom.app/static/images/logo.png",
    "https://phantom.app/static/assets/logo.png"
]

def download_phantom_logo():
    """Download Phantom logo from alternative sources"""
    try:
        filepath = os.path.join('logos', 'phantom.png')
        
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        for url in phantom_urls:
            try:
                print(f"  Trying {url}...")
                response = requests.get(url, timeout=15, headers=headers)
                response.raise_for_status()
                
                # Check if we got actual content
                if len(response.content) > 1000:  # At least 1KB
                    # Save the file
                    with open(filepath, 'wb') as f:
                        f.write(response.content)
                    
                    print(f"✓ Phantom: Downloaded successfully from {url}")
                    print(f"  File size: {len(response.content)} bytes")
                    return True
                else:
                    print(f"    Failed: File too small ({len(response.content)} bytes)")
                    
            except Exception as e:
                print(f"    Failed: {str(e)}")
                continue
        
        print("✗ Phantom: All URLs failed")
        return False
        
    except Exception as e:
        print(f"✗ Phantom: Failed to download - {str(e)}")
        return False

def main():
    print("Downloading Phantom logo from alternative sources...")
    print("=" * 50)
    
    download_phantom_logo()
    
    print("\n" + "=" * 50)
    print("Download complete!")
    
    # List the files
    print("\nCurrent Phantom file:")
    if os.path.exists('logos/phantom.png'):
        size = os.path.getsize('logos/phantom.png')
        print(f"  - phantom.png: {size} bytes")

if __name__ == "__main__":
    main() 
