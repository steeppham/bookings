#!/bin/bash

set -e

echo "Running Unit Test"
npm run test
echo "Running program with input.json"
npm start
echo "Program executed successfuly with output.json"
