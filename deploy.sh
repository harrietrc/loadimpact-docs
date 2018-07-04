#!/usr/bin/env bash

#
# Copy Jekyll site to S3 bucket and invalidate CloudFront paths as necessary: 
# https://simpleit.rocks/having-pretty-urls-in-a-jekyll-website-hosted-in-amazon-s3/#invalidate-uploaded-files-in-cloudfront
#

s3_bucket="s3://support.loadimpact.com/"
distribution_id=E2PUIJ818EQ47L

set -e # halt script on error
set -v # echo on

tempfile=$(mktemp)

echo "Copying files to S3..."
aws s3 sync jekyll/_site/docs $(s3_bucket) --size-only --exclude "*" --include "*.*" --delete | tee -a $(tempfile)
aws s3 sync jekyll/_site/docs $(s3_bucket) --size-only --content-type text/html --exclude "*.*" --delete | tee -a $(tempfile)

echo "Invalidating cached files on CloudFront..."
grep "upload\|deleted" $(tempfile) | sed -e "s|.*upload.*to $(s3_bucket)|/|" | sed -e "s|.*delete: $(s3_bucket)|/|" | sed -e 's/index.html//' | sed -e 's/\(.*\).html/\1/' | tr '\n' ' ' | xargs aws cloudfront create-invalidation --distribution-id $(distribution_id) --paths
