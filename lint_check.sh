#!/bin/bash
fileList=$(git diff --diff-filter=d --cached --name-only | grep -E '\.js$')
if [ ${#fileList} -lt 1 ]; then
    echo -e "no staged .js files to test\n"
    exit
fi
npx eslint ${fileList[*]} "$@"
if [ $? -ne 0 ]; then
    exit 1
fi