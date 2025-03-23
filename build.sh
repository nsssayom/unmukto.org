#!/bin/bash

# Print commands and exit on errors
set -xe

# Clean previous build
rm -rf docs
mkdir docs

# Build Next.js project (will output to 'out' directory)
npm run build

# Move contents from 'out' to 'docs'
mv out/* docs/

# Clean up out directory
rm -rf out

# Create .nojekyll file to bypass Jekyll processing
touch docs/.nojekyll

# Create CNAME file if you have a custom domain
# echo "unmukto.org" > docs/CNAME

echo "Build completed! Files are ready in /docs"