# Supply chain & data auditing

This repository contains an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

## Project Write Up - UML

### Activity Diagram
![Activity Diagram](https://user-images.githubusercontent.com/37314424/170694960-c7750c82-0d8a-4ccf-aa62-5cf4838bdb62.PNG)

### Sequence Diagram
![Sequence diagram](https://user-images.githubusercontent.com/37314424/170690004-4e58c860-b8a4-4590-ae42-e97b7fbc6ee5.PNG)

### State Diagram
![State Diagram](https://user-images.githubusercontent.com/37314424/170715294-73e94a69-ff77-4870-8b0b-e9c2c8829b70.PNG)

### Data Model Diagram
![uml](https://user-images.githubusercontent.com/37314424/170822620-dfda1729-07d6-4395-ab3d-f3d08d9e2ca1.PNG)

## Project Write Up - Libraries
The project contains the following libraries
1. Roles Library:
  This is a solidity custom built helper library having functions for easier implementation of different actors roles in the supply chain.It contains commonly used functions in the actor roles.
2. [Dotenv Library](https://www.npmjs.com/package/dotenv): This is a node js module for managing environmetal variables in the project.It is being used to read environmental variables from such as the mnemonic seed and infura API access key.
3. [Truffle Hdwallet Provider](https://www.npmjs.com/package/@truffle/hdwallet-provider): Used  to sign transactions for addresses derived from a 12 or 24 word mnemonic.
  
## General Write UP -  Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Dependencies
For this project, you will need to have:
 1. Node version ``` v10.0.0```
 2. NPM version ```  v6.14.12```
 3. Truffle version  ```v4.1.14```
 4. Solidity version ```V0.4.24```
 5. web3 version ```1.7.3```
 

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.


### Installing

> The starter code is written for **Solidity v0.4.24**. At the time of writing, the current Truffle v5 comes with Solidity v0.5 that requires function _mutability_ and _visibility_ to be specified (please refer to Solidity [documentation](https://docs.soliditylang.org/en/v0.5.0/050-breaking-changes.html) for more details). To use this starter code, please run `npm i -g truffle@4.1.14` to install Truffle v4 with Solidity v0.4.24.

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/dtembo98/coffee-supply-chain.git
```

Change directory to `project-6` folder and install all requisite npm packages (as listed in `package.json`):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

In a separate terminal window, Compile smart contracts:

```
truffle compile
```
This will create the smart contract artifacts in folder `build\contracts`.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

Test smart contracts:

```
truffle test
```

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

- [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
- [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.

### Transaction Id
0x7bfbc8f883639017414b2d937fd01f75eef59871de2e243b30c8fad70672b011
### Contract address
0xa6a46b8EDd80aE045F5a86928c8D5eD546818cFB


