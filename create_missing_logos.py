#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os
import random

# Create logos directory if it doesn't exist
if not os.path.exists('logos'):
    os.makedirs('logos')

# Wallets that need placeholder logos
missing_wallets = ["Glow", "Fuse", "Nightly"]

# Color schemes for different wallet types
color_schemes = {
    "Glow": ["#FF6B6B", "#FF8E8E", "#FFB3B3"],  # Warm glow colors
    "Fuse": ["#FF6B35", "#FF8A65", "#FFAB91"],  # Fuse/energy colors
    "Nightly": ["#2C3E50", "#34495E", "#5D6D7E"]  # Night/dark colors
}

def create_placeholder_logo(wallet_name, size=(64, 64)):
    """Create a placeholder logo with wallet initials"""
    # Create filename
    filename = wallet_name.lower().replace(' ', '_').replace('-', '_').replace('(', '').replace(')', '') + '.png'
    filepath = os.path.join('logos', filename)
    
    # Skip if file already exists and is not too small
    if os.path.exists(filepath) and os.path.getsize(filepath) > 1000:
        print(f"✓ {wallet_name}: Already exists with good size")
        return True
    
    # Get wallet initials (first letter of each word)
    words = wallet_name.split()
    if len(words) == 1:
        initials = words[0][:2].upper()
    else:
        initials = ''.join(word[0] for word in words[:2]).upper()
    
    # Choose color scheme
    if wallet_name in color_schemes:
        colors = color_schemes[wallet_name]
    else:
        # Fallback to random colors
        all_colors = list(color_schemes.values())
        colors = random.choice(all_colors)
    
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
    
    # List created files
    print("\nCreated logos:")
    if os.path.exists('logos'):
        for wallet_name in missing_wallets:
            filename = wallet_name.lower().replace(' ', '_').replace('-', '_').replace('(', '').replace(')', '') + '.png'
            filepath = os.path.join('logos', filename)
            if os.path.exists(filepath):
                size = os.path.getsize(filepath)
                print(f"  - {filename}: {size} bytes")

if __name__ == "__main__":
    main() 
