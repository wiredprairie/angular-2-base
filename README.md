# Introduction

This is a simple starter project that uses Angular 2 on the client and Hapi on NodeJS for the server.

# Installation instructions

Note that Angular currently may need TypeScript > 2.0.  

## Windows

    npm install --global concurrently typescript typings@next node-sass nodemon

## Linux / MacOS
You may need to use `sudo` on Linux or MacOS.

    sudo npm install --global concurrently typescript@next typings node-sass nodemon


# Debugging

If using Visual Studio Code, confirm that the `launch.json` file has an `"Attach"` configuration that has similar settings to the following:

    {
        "name": "Attach",
        "type": "node",
        "request": "attach",
        "port": 5858,
        "address": "localhost",
        "restart": true,
        "sourceMaps": true,
        "outDir": null,
        "localRoot": "${workspaceRoot}",
        "remoteRoot": null
    }

Then, when ready to debug, from the command line:

    npm run debug

From Code, select the `"Attach"` as the debugging option. Source maps, breakpoints, etc. should work.  

# Rollup

    rollup -f iife --sourcemap inline -- client/app/main.js > client/build/main.js

    