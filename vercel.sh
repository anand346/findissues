#!/bin/bash

if [[ $VERCEL_GIT_COMMIT_REF == "main" && $VERCEL_GIT_COMMIT_AUTHOR_LOGIN == "anand346"  ]] ; then 
  echo "repo owner: $VERCEL_GIT_COMMIT_AUTHOR_LOGIN"
  exit 1
  git log -1 --pretty=oneline --abbrev-commit | grep -w "build" && exit 1 || exit 0
else
  echo "repo owner: $VERCEL_GIT_COMMIT_AUTHOR_LOGIN" 
  exit 1
fi