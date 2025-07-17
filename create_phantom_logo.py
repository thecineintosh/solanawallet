#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# Create logos directory if it doesn't exist
if not os.path.exists('logos'):
    os.makedirs('logos')

def create_phantom_logo(size=(64, 64)):
    """Create a professional Phantom logo with purple theme"""
    filepath = os.path.join('logos', 'phantom.png')
    
    # Phantom's signature purple colors
    primary_purple = "#AB9FF2"  # Phantom's main purple
    dark_purple = "#7C3AED"     # Darker purple for depth
    light_purple = "#C4B5FD"    # Light purple for highlights
    
    # Create image
    img = Image.new('RGBA', size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw background circle with gradient effect
    margin = 4
    circle_bbox = (margin, margin, size[0] - margin, size[1] - margin)
    
    # Create gradient effect by drawing multiple circles
    for i in range(3):
        offset = i * 2
        bbox = (margin + offset, margin + offset, size[0] - margin - offset, size[1] - margin - offset)
        color = [primary_purple, dark_purple, light_purple][i]
        draw.ellipse(bbox, fill=color)
    
    # Add Phantom's characteristic "P" with ghost-like styling
    try:
        # Try to use a system font
        font_size = size[0] // 2
        font = ImageFont.truetype("/System/Library/Fonts/Arial.ttf", font_size)
    except:
        try:
            # Fallback to default font
            font = ImageFont.load_default()
        except:
            font = None
    
    if font:
        # Calculate text position to center it
        bbox = draw.textbbox((0, 0), "P", font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        x = (size[0] - text_width) // 2
        y = (size[1] - text_height) // 2 - 2  # Slightly up for better balance
        
        # Draw text with white color and slight shadow
        draw.text((x+1, y+1), "P", fill='#CCCCCC', font=font)  # Shadow
        draw.text((x, y), "P", fill='white', font=font)  # Main text
    
    # Add a small ghost-like accent in corner
    accent_size = size[0] // 6
    accent_x = size[0] - accent_size - margin//2
    accent_y = margin//2
    draw.ellipse([accent_x, accent_y, accent_x + accent_size, accent_y + accent_size], fill=light_purple)
    
    # Save the image
    img.save(filepath, 'PNG')
    print(f"✓ Phantom: Created professional logo")
    return True

def main():
    print("Creating professional Phantom logo...")
    print("=" * 50)
    
    if create_phantom_logo():
        print("✓ Phantom logo created successfully!")
        
        # Show file info
        if os.path.exists('logos/phantom.png'):
            size = os.path.getsize('logos/phantom.png')
            print(f"  File size: {size} bytes")
    else:
        print("✗ Failed to create Phantom logo")

if __name__ == "__main__":
    main() 
