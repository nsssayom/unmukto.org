#!/bin/bash

# Print commands and exit on errors
set -xe

# Clean and create docs directory
rm -rf docs
mkdir docs

# Build the Next.js project
npm run build

# Move the built files to docs directory
mv out/* docs/

# Create a .nojekyll file to bypass Jekyll processing
touch docs/.nojekyll

# Create a subdirectory for the GitHub Pages deployment
mkdir -p docs/unmukto.org
cp -r docs/* docs/unmukto.org/ 2>/dev/null || true

# Clean up
rm -rf out

# Create CNAME file if you have a custom domain
# echo "unmukto.org" > docs/CNAME

echo "Build completed! Files are ready in /docs"