#!/bin/bash

# Iterate over all files in src/assets
for file in ../src/assets/*.*
do
  # Skip if the file is already a .webp file
  if [[ $file != *.webp ]]
  then
    # Call ./cwebp -q 80 "$file" on each file
    ./cwebp -q 80 "$file" -o "${file%.*}.webp"
  fi
done

rm ../src/assets/*.!(webp)