## Overview

This is an Ethereum NFT Marketplace scaffold built with Solidity, IPFS, React & Vite with modern tooling including Hardhat v3 & Ignition deployment system.

## Running this project

To run this project locally, follow these steps:

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone <repository-url>
cd ethereum-scaffold
npm install
```

2. Start the local Hardhat node:

```sh
npm run chain
```

3. Deploy contracts and export artifacts (in a separate terminal):

```sh
npm run deploy
npm run export
```

4. Configure environment variables (optional):

```sh
cp .env.example .env
# Edit .env with your project IDs
```

5. Start the Vite development server:

```sh
npm run dev
```

## Development Workflow

When working with smart contracts, follow this development flow:

1. **Create/update smart contract** in the `/contracts` folder
2. **Update deployment module** in `/ignition/modules/` using Hardhat Ignition
3. **Compile contracts**: `npm run compile`
4. **Deploy contracts**: `npm run deploy`
5. **Export artifacts**: `npm run export`

After running these commands, the contract artifacts will be updated in `/src/abi/` and available for use in the frontend.

### Available Scripts

- `npm run dev` - Start Vite development server
- `npm run chain` - Start local Hardhat node
- `npm run compile` - Compile smart contracts
- `npm run deploy` - Deploy contracts using Hardhat Ignition to localhost
- `npm run export` - Export contract artifacts to `/src/abi/`
- `npm run build` - Build Vite application for production
- `npm run start` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
contracts/          # Smart contracts
└── NFTMarketplace.sol

ignition/           # Hardhat Ignition deployment
├── modules/
│   └── NFTMarketplace.js
└── deployments/    # Deployment artifacts

src/                # Frontend source code
├── components/     # React components
│   └── Navigation.jsx
├── pages/          # Page components
│   ├── Home.jsx
│   ├── CreateNFT.jsx
│   ├── Dashboard.jsx
│   ├── MyNFTs.jsx
│   └── ResellNFT.jsx
├── lib/            # Utility libraries
│   ├── appkit.js   # Wallet connection
│   └── contracts.js # Contract utilities
├── abi/            # Contract ABIs
├── styles/         # CSS styles
└── App.jsx         # Main application

vite.config.js      # Vite configuration
hardhat.config.js   # Hardhat configuration
```

### Configuration

#### Environment Variables

Create a `.env` file from the example:

```sh
cp .env.example .env
```

Configure the following variables:

- `VITE_REOWN_PROJECT_ID` - Get from [Reown Dashboard](https://dashboard.reown.com) for wallet connection

#### Network Deployment

To deploy to other networks:

1. Update network configurations in `hardhat.config.js`
2. Set up private keys securely (use environment variables or Hardhat accounts)
3. Configure RPC endpoints (Infura, Alchemy, etc.)
4. Deploy with: `npm run deploy -- --network <network-name>`

### Technology Stack

- **Frontend**: React 18 + Vite + TailwindCSS
- **Routing**: React Router v6
- **Wallet**: Reown AppKit (formerly WalletConnect)
- **Blockchain**: Ethers.js v6
- **Smart Contracts**: Solidity 0.8.20 + OpenZeppelin
- **Development**: Hardhat v3 + Ignition deployment
- **Storage**: IPFS for metadata and images
