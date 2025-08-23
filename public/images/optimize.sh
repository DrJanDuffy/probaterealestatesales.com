#!/bin/bash

echo "========================================"
echo "  Image Optimization Tool"
echo "  Dr. Jan Duffy Website"
echo "========================================"
echo

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "ERROR: Failed to install dependencies!"
        exit 1
    fi
fi

echo "Starting image optimization..."
echo

# Run optimization
npm run optimize

echo
echo "========================================"
echo "  Optimization Complete!"
echo "========================================"
echo
echo "Check the 'optimized' folder for results"
echo
