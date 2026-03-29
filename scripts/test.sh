#!/bin/sh
set -e

echo "Running health check..."
health_response=$(curl -s http://localhost:3000/health)
echo "$health_response" | grep '"status":"ok"'

echo "Running fruits API check..."
fruits_response=$(curl -s http://localhost:3000/api/fruits)

echo "$fruits_response" | grep -q '"name":"apples"'
echo "$fruits_response" | grep -q '"name":"bananas"'
echo "$fruits_response" | grep -q '"name":"oranges"'
echo "$fruits_response" | grep -q '"name":"avocados"'
echo "fruits response:"
echo "$fruits_response"
echo "All tests passed."
