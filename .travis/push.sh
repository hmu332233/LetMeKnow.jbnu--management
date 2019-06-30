#!/bin/sh

git config user.email "travis@travis-ci.org";
git config user.name "Travis CI";

git add --all build;
git commit -m "Travis build";

git remote add origin-pages https://${token}@github.com/hmu332233/LetMeKnow.jbnu-management.git > /dev/null 2>&1;
git push --quiet --set-upstream origin-pages develop;