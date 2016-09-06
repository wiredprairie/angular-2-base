# Introduction

This is a sample project that uses Angular 2 on the client and Hapi on NodeJS for the server.

# Installation instructions

    npm install --global concurrently typescript typings node-sass

You may need to use `sudo` on Linux or MacOS.



# Rollup

    rollup -f iife --sourcemap inline -- client/app/main.js > client/build/main.js

    