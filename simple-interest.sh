#!/bin/bash

echo "Simple Interest Calculator"

read -p "Enter the Principal amount: " principal
read -p "Enter the Rate of Interest (%): " rate
read -p "Enter the Time period (years): " time

simple_interest=$(echo "scale=2; ($principal * $rate * $time) / 100" | bc)

echo "Simple Interest: $simple_interest"
