#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os
import random

# Create logos directory if it doesn't exist
if not os.path.exists('logos'):
    os.makedirs('logos')

# Wallets that need placeholder logos
missing_wallets = [
    "Glow", "Decaf", "Slope", "Atomic Wallet", "NOW Wallet", "Turnkey", 
    "Circle", "Cake Wallet", "Dynamic", "Gem Wallet", "Privy", "Helium", 
    "Math Wallet", "Gate Wallet", "MEXC", "DigiFinex", "Kraken", 
    "Kraken Pro", "Bitfinex", "Voyager", "Argent", "Tally Ho", 
    "Wasabi", "BlueWallet", "Casa", "Unchained", "Plaid", "Yodlee", "Quovo"
]

# Color schemes for different wallet types
color_schemes = [
    # Blue variations
    ["#1E3A8A", "#3B82F6", "#60A5FA"],
    ["#1E40AF", "#2563EB", "#3B82F6"],
    ["#1E293B", "#475569", "#64748B"],
    
    # Green variations
    ["#065F46", "#059669", "#10B981"],
    ["#166534", "#16A34A", "#22C55E"],
    ["#14532D", "#15803D", "#16A34A"],
    
    # Purple variations
    ["#581C87", "#7C3AED", "#A855F7"],
    ["#4C1D95", "#6D28D9", "#8B5CF6"],
    ["#3730A3", "#4F46E5", "#6366F1"],
    
    # Orange variations
    ["#9A3412", "#EA580C", "#F97316"],
    ["#C2410C", "#DC2626", "#EF4444"],
    ["#B45309", "#D97706", "#F59E0B"],
    
    # Teal variations
    ["#134E4A", "#0F766E", "#14B8A6"],
    ["#164E63", "#0E7490", "#0891B2"],
    ["#0F172A", "#1E293B", "#334155"]
]

def create_placeholder_logo(wallet_name, size=(64, 64)):
    """Create a placeholder logo with wallet initials"""
    # Create filename
    filename = wallet_name.lower().replace(' ', '_').replace('-', '_').replace('(', '').replace(')', '') + '.png'
    filepath = os.path.join('logos', filename)
    
    # Skip if file already exists
    if os.path.exists(filepath):
        print(f"✓ {wallet_name}: Already exists")
        return True
    
    # Get wallet initials (first letter of each word)
    words = wallet_name.split()
    if len(words) == 1:
        initials = words[0][:2].upper()
    else:
        initials = ''.join(word[0] for word in words[:2]).upper()
    
    # Choose a random color scheme
    colors = random.choice(color_schemes)
    background_color = colors[0]
    accent_color = colors[1]
    
    # Create image
    img = Image.new('RGBA', size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw background circle
    margin = 4
    circle_bbox = (margin, margin, size[0] - margin, size[1] - margin)
    draw.ellipse(circle_bbox, fill=background_color)
    
    # Add accent circle in corner
    accent_size = size[0] // 4
    accent_bbox = (size[0] - accent_size - margin//2, margin//2, size[0] - margin//2, accent_size + margin//2)
    draw.ellipse(accent_bbox, fill=accent_color)
    
    # Add text
    try:
        # Try to use a system font
        font_size = size[0] // 3
        font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", font_size)
    except:
        try:
            # Fallback to default font
            font = ImageFont.load_default()
        except:
            # Last resort - no font
            font = None
    
    if font:
        # Calculate text position to center it
        bbox = draw.textbbox((0, 0), initials, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        x = (size[0] - text_width) // 2
        y = (size[1] - text_height) // 2
        
        # Draw text with white color
        draw.text((x, y), initials, fill='white', font=font)
    
    # Save the image
    img.save(filepath, 'PNG')
    print(f"✓ {wallet_name}: Created placeholder logo")
    return True

def main():
    print("Creating placeholder logos for missing wallets...")
    print("=" * 50)
    
    successful_creations = 0
    total_wallets = len(missing_wallets)
    
    for wallet_name in missing_wallets:
        if create_placeholder_logo(wallet_name):
            successful_creations += 1
    
    print("\n" + "=" * 50)
    print(f"Creation complete: {successful_creations}/{total_wallets} placeholder logos created")
    
    # List all logo files
    print("\nAll logo files:")
    if os.path.exists('logos'):
        files = os.listdir('logos')
        for file in sorted(files):
            print(f"  - {file}")

if __name__ == "__main__":
    main() 
