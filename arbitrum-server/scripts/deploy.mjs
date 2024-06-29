import hardhat from 'hardhat';
const { ethers } = hardhat;

async function main() {
  const supplyChain = await ethers.deployContract('SupplyChain');

  await supplyChain.waitForDeployment();

  // console.log(supplyChain)

  console.log('Contract Deployed at ' + supplyChain.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x2586Fe5A7623C575B0Fc0EA09E8c35B4D3A54518
