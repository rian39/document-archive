#!/bin/bash

# Auto-commit script for document-archive
# Checks for new/modified files and commits them to git

# Change to the repository directory
cd /home/mackenza/document-archive || exit 1

# Check if there are any untracked or modified PDF files
PDF_FILES=$(git status --porcelain | grep -E '\.pdf$' | awk '{print $2}')

if [[ -n "$PDF_FILES" ]]; then
    # Add only PDF files
    git add '*.pdf'

    # Create commit with timestamp
    TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
    git commit -m "Auto-commit: ${TIMESTAMP}"

    # Push to remote origin
    git push origin master

    echo "PDF files committed and pushed at ${TIMESTAMP}"
else
    echo "No PDF files to commit at $(date '+%Y-%m-%d %H:%M:%S')"
fi
