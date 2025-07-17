#!/usr/bin/env python3
import requests
import os

# Create logos directory if it doesn't exist
if not os.path.exists('logos'):
    os.makedirs('logos')

# Official logo URLs for Phantom and Solflare
wallet_logos = {
    "Phantom": [
        "https://phantom.app/img/logo.png",
        "https://phantom.app/favicon.ico",
        "https://phantom.app/assets/logo.png",
        "https://phantom.app/images/logo.png",
        "https://cdn.phantom.app/img/logo.png"
    ],
    "Solflare": [
        "https://solflare.com/favicon.ico",
        "https://solflare.com/assets/logo.png",
        "https://solflare.com/images/logo.png",
        "https://cdn.solflare.com/logo.png",
        "https://solflare.com/img/logo.png"
    ]
}

def download_logo(wallet_name, urls):
    """Download logo for a specific wallet trying multiple URLs"""
    try:
        # Create filename
        if wallet_name == "Solflare":
            filename = "solflare.png"  # Convert from SVG to PNG
        else:
            filename = wallet_name.lower() + ".png"
        
        filepath = os.path.join('logos', filename)
        
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
                if len(response.content) > 100:  # At least 100 bytes
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
    print("Downloading Phantom and Solflare logos...")
    print("=" * 50)
    
    for wallet_name, urls in wallet_logos.items():
        print(f"\nProcessing {wallet_name}...")
        download_logo(wallet_name, urls)
    
    print("\n" + "=" * 50)
    print("Download complete!")
    
    # List the files
    print("\nCurrent Phantom and Solflare files:")
    if os.path.exists('logos'):
        for file in ['phantom.png', 'solflare.png', 'solflare.svg']:
            if os.path.exists(os.path.join('logos', file)):
                size = os.path.getsize(os.path.join('logos', file))
                print(f"  - {file}: {size} bytes")

if __name__ == "__main__":
    main() 
