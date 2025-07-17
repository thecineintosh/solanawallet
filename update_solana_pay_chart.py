#!/usr/bin/env python3
"""
Solana Pay QR Support Analysis Chart Generator
Analyzes wallet data and generates updated visualization
"""

import json
import matplotlib.pyplot as plt
import numpy as np
from collections import Counter

def analyze_solana_pay_support():
    """Analyze Solana Pay QR support from wallet data"""
    
    # Read the wallet data from app.js
    with open('app.js', 'r') as f:
        content = f.read()
    
    # Extract the walletData array
    start = content.find('const walletData = [')
    end = content.find('];', start) + 1
    
    # Convert to valid JSON by replacing JavaScript syntax
    wallet_data_str = content[start:end]
    wallet_data_str = wallet_data_str.replace('const walletData = ', '')
    wallet_data_str = wallet_data_str.replace("'", '"')
    wallet_data_str = wallet_data_str.replace('true', 'true')
    wallet_data_str = wallet_data_str.replace('false', 'false')
    
    try:
        wallet_data = json.loads(wallet_data_str)
    except json.JSONDecodeError as e:
        print(f"Error parsing wallet data: {e}")
        return
    
    # Analyze Solana Pay QR support
    solana_pay_status = [wallet['solanaPayQR'] for wallet in wallet_data]
    status_counts = Counter(solana_pay_status)
    
    print("Solana Pay QR Support Analysis:")
    print(f"Total Wallets: {len(wallet_data)}")
    print(f"Full Support (Yes): {status_counts.get('Yes', 0)}")
    print(f"Partial Support: {status_counts.get('Partial', 0)}")
    print(f"No Support: {status_counts.get('No', 0)}")
    print(f"Unknown: {status_counts.get('Unknown', 0)}")
    
    # Create the visualization
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 6))
    
    # Pie chart
    labels = ['Full Support', 'Partial Support', 'No Support', 'Unknown']
    sizes = [
        status_counts.get('Yes', 0),
        status_counts.get('Partial', 0),
        status_counts.get('No', 0),
        status_counts.get('Unknown', 0)
    ]
    colors = ['#4CAF50', '#FFC107', '#F44336', '#9E9E9E']
    
    ax1.pie(sizes, labels=labels, colors=colors, autopct='%1.1f%%', startangle=90)
    ax1.set_title('Solana Pay QR Support Distribution', fontsize=14, fontweight='bold')
    
    # Bar chart
    x = np.arange(len(labels))
    bars = ax2.bar(x, sizes, color=colors, alpha=0.8)
    ax2.set_xlabel('Support Level', fontsize=12)
    ax2.set_ylabel('Number of Wallets', fontsize=12)
    ax2.set_title('Solana Pay QR Support by Wallet Count', fontsize=14, fontweight='bold')
    ax2.set_xticks(x)
    ax2.set_xticklabels(labels, rotation=45)
    
    # Add value labels on bars
    for bar, size in zip(bars, sizes):
        height = bar.get_height()
        ax2.text(bar.get_x() + bar.get_width()/2., height + 0.5,
                f'{size}', ha='center', va='bottom', fontweight='bold')
    
    # Add summary statistics
    total_supported = status_counts.get('Yes', 0) + status_counts.get('Partial', 0)
    support_percentage = (total_supported / len(wallet_data)) * 100
    
    fig.suptitle(f'Solana Pay QR Support Analysis\n{total_supported}/{len(wallet_data)} wallets ({support_percentage:.1f}%) support Solana Pay QR', 
                 fontsize=16, fontweight='bold')
    
    plt.tight_layout()
    plt.savefig('solana_pay_qr_analysis_updated.png', dpi=300, bbox_inches='tight')
    plt.show()
    
    # List wallets with full support
    full_support_wallets = [wallet['name'] for wallet in wallet_data if wallet['solanaPayQR'] == 'Yes']
    partial_support_wallets = [wallet['name'] for wallet in wallet_data if wallet['solanaPayQR'] == 'Partial']
    
    print(f"\nWallets with Full Solana Pay QR Support ({len(full_support_wallets)}):")
    for wallet in full_support_wallets:
        print(f"  - {wallet}")
    
    print(f"\nWallets with Partial Solana Pay QR Support ({len(partial_support_wallets)}):")
    for wallet in partial_support_wallets:
        print(f"  - {wallet}")

if __name__ == "__main__":
    analyze_solana_pay_support() 
