#!/bin/bash

if [[ $VERCEL_GIT_COMMIT_REF == "main" && $VERCEL_GIT_REPO_OWNER == "anand346"  ]] ; then 
  echo "repo owner: $VERCEL_GIT_REPO_OWNER"
  git log -1 --pretty=oneline --abbrev-commit | grep -w "build" && exit 1 || exit 0
else
  echo "repo owner: $VERCEL_GIT_REPO_OWNER" 
  exit 1
fi