#!/bin/bash
# publish.sh — commit all changes and push to GitHub
# Usage: ./publish.sh "your commit message"

set -e

MSG="${1:-update wiki}"

cd "$(dirname "$0")"

git add -A
git commit -m "$MSG" || { echo "Nothing to commit."; exit 0; }
git push origin main

echo "Published: $MSG"
