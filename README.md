# Decentralized P2P App on Blockchain

Welcome to our decentralized peer-to-peer (P2P) application built on the blockchain! This project utilizes ERC-2535 Diamond Proxy for implementing smart contracts and includes a React frontend for the client interface.

## Prerequisites

- Node.js: v20.11.1
- npm: v10.2.4

## Getting Started

### Navigate to the blockchain folder:
```bash
cd blockchain
```

Changes the current directory to the blockchain folder.

### Install dependencies for the blockchain part:

```bash 
npm install
```
Installs the necessary dependencies for the blockchain part of the project.

### Compile and deploy smart contracts:

```bash 
npx hardhat compile
```
```bash 
npx hardhat run script/deploy.js
```
Compiles the smart contracts and deploys them on the Mumbai testnet.

### Navigate to the client folder:

```bash
cd client
```
Moves back to the parent directory and then changes the directory to the client folder.

### Install client dependencies:

```bash
npm install
```
Installs the necessary dependencies for the client part of the project.

Start the React frontend:

```bash
npm start
```

### Starts the React frontend, allowing you to access the application in your browser at http://localhost:3000.

### Features
- ERC-2535 Diamond Proxy: Smart contracts are implemented using ERC-2535 Diamond Proxy, allowing for upgradable storage and efficient contract management.
- ChatGPT Replies: The application includes a feature to interact with ChatGPT for generating replies to messages.
- Media Sharing: Users can send images and videos through the application.
