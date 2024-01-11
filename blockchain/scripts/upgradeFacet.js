/* global ethers */
/* eslint prefer-const: "off" */

const { getContractFactory } = require('@nomiclabs/hardhat-ethers/types/index.js')
const { getSelectors, FacetCutAction } = require('./libraries/diamond.js')

async function deployDiamond () {
  const accounts = await ethers.getSigners()
  const contractOwner = accounts[0]

  // deploy Diamond
  const diamond = await ethers.getContractAt('Diamond','0x9A99790Bdbe9460eB8e0b80b729Edb74F140fCfF')
  console.log('Diamond deployed:', diamond.address)

//   const peerChat = await ethers.getContractAt("Peerchat",diamond.address);
//   try {
//     const res = await peerChat.readMessage('0xaF7f488eDf63410AF7B82998A6a96a14dcB8e89d');
//     console.log("respose : ",res);
//   } catch (error) {
//   }

//   deploy facets
  console.log('')
  console.log('Deploying facets')
  const FacetNames = [
    'Peerchat'
  ]
  const cut = []
  for (const FacetName of FacetNames) {
    const Facet = await ethers.getContractFactory(FacetName)
    const facet = await Facet.deploy()
    await facet.deployed()
    console.log(`${FacetName} deployed: ${facet.address}`)
    cut.push({
      facetAddress: facet.address,
      action: FacetCutAction.Replace,
      functionSelectors: getSelectors(facet)
    })
  }

//   upgrade diamond with facets
  console.log('')
  console.log('Diamond Cut:', cut)
  const diamondCutFacet = await ethers.getContractAt('DiamondCutFacet', diamond.address)
  // call to init function
  tx = await diamondCutFacet.diamondCut(cut,diamond.address, '0x', { gasLimit: 800000 })
  console.log('Diamond cut tx: ', tx.hash)
  receipt = await tx.wait()
  if (!receipt.status) {
    throw Error(`Diamond upgrade failed: ${tx.hash}`)
  }
  console.log('Completed diamond cut',diamond.address)

  return diamond.address
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
if (require.main === module) {
  deployDiamond()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error)
      process.exit(1)
    })
}

exports.deployDiamond = deployDiamond
