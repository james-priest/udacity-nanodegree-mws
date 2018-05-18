#!/bin/sh

SRC="$1"
LOW=60
convert $SRC.jpg -quality $LOW low_$SRC.jpg
convert $SRC.jpg -quality $LOW low_$SRC.webp
convert $SRC.jpg -quality $LOW -resize 50% "$SRC"_"$LOW"q_50pc.jpg
convert $SRC.jpg -quality $LOW -resize 50% "$SRC"_"$LOW"q_50pc.webp

# To use this script,
# run the following from a terminal
# in a folder containing an image named foo.jpg (or whatever):
#   chmod u+x convert.sh
#   ./convert.sh foo
