# Install Dependencies to Run TypeScript in VS Code

To set up and run TypeScript in Visual Studio Code (VS Code), you need to install the necessary dependencies. Follow these steps to install TypeScript using npm:

## Step-by-Step Installation Guide

Install Node.js and npm:

Ensure that you have Node.js and npm installed on your machine. You can download and install them from [nodejs.org](https://nodejs.org/en).

Initialize a new Node.js project:
Open your terminal and navigate to your project directory. Run the following command to initialize a new Node.js project:
```
npm init -y
```
## Install TypeScript:
Install TypeScript as a development dependency by running the following command:
```
npm install --save-dev typescript
```

## Install TypeScript globally (optional):
To use the tsc command globally, you can also install TypeScript globally:
```
npm install -g typescript
```

## Create a tsconfig.json file:

To configure TypeScript, create a tsconfig.json file in your project directory by running:
```
tsc --init
```

This will generate a default tsconfig.json file, which you can modify according to your project requirements.

## Install VS Code TypeScript Extension:
Make sure you have the TypeScript extension installed in VS Code. You can install it from the Extensions view by searching for "TypeScript".

## Additional Resources
For more information on TypeScript and its configuration options, visit the [TypeScript npm package page](https://www.npmjs.com/package/typescript).
