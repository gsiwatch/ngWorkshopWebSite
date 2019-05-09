#!/usr/bin/env bash

readonly PROJECT_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/.."

declare REMOTE=$1

cd "${PROJECT_ROOT}" || exit 1

# check for a REMOTE given as an argument to the script
# if it isn't there, default it
if [[ -z $REMOTE ]]; then
    REMOTE=origin
fi

printf '\nDeploying to the remote: %s\n\n' "$REMOTE"

npx gh-pages --dist dist/interestedPage --remote $REMOTE
