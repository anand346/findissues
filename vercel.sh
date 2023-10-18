#!/bin/bash

if [[ $VERCEL_GIT_COMMIT_REF == "main"  ]] ; then 
  git log -1 --pretty=oneline --abbrev-commit | grep -w "build" && exit 1 || exit 0
else
  exit 1
fi