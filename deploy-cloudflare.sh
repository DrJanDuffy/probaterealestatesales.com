#!/bin/bash

echo "🚀 Deploying to Cloudflare Pages..."

# Build the project
echo "📦 Building project..."
npm run build:cf

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Check if out directory exists
    if [ -d "out" ]; then
        echo "📁 Build output directory found"
        echo "🌐 Ready for Cloudflare Pages deployment!"
        echo ""
        echo "Next steps:"
        echo "1. Go to Cloudflare Dashboard → Pages"
        echo "2. Connect your GitHub repository"
        echo "3. Use build command: npm run build:cf"
        echo "4. Build output directory: out"
        echo ""
        echo "Or deploy manually with: wrangler pages deploy out"
    else
        echo "❌ Build output directory 'out' not found"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
