import { network } from 'hardhat';

async function main() {
  console.log('Deploying NFTMarketplace...');
  const { ethers } = await network.connect();
  const NFTMarketplace = await ethers.getContractFactory('NFTMarketplace');
  const nftMarketplace = await NFTMarketplace.deploy();
  await nftMarketplace.waitForDeployment();
  const address = await nftMarketplace.getAddress();
  console.log('NFT marketplace deployed to:', address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
