#!/bin/sh
set -e

echo "Running health check..."
health_response=$(curl -s http://localhost:3000/health)
echo "$health_response" | grep '"status":"ok"'

echo "Running fruits API check..."
fruits_response=$(curl -s http://localhost:3000/api/fruits)

echo "$fruits_response" | grep '"name":"apples"'
echo "$fruits_response" | grep '"name":"bananas"'
echo "$fruits_response" | grep '"name":"oranges"'
echo "$fruits_response" | grep '"name":"avocados"'

echo "All tests passed."
