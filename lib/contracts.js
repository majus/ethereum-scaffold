import { ethers } from 'ethers';

/**
 *
 * @param {ethers.ContractRunner} runner
 */
export async function getNFTMarketplace(runner) {
  const { chainId } = await runner.provider.getNetwork();
  const { default: addresses } = await import(
    `../ignition/deployments/chain-${chainId}/deployed_addresses.json`
  );
  const { default: abi } = await import('../abi/NFTMarketplace.json');
  return new ethers.Contract(
    addresses['NFTMarketplaceModule#NFTMarketplace'],
    abi,
    runner
  );
}
