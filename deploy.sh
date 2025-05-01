#!/bin/bash

# Check if the user provided a GitHub repo link
if [ -z "$1" ]; then
  echo "Usage: ./deploy.sh <your-github-repo-link>"
  exit 1
fi

REPO_URL=$1

# Git commands
git init
git add .
git commit -m "first commit"
git remote add origin "$REPO_URL"
git branch -M main
git push -u origin main
