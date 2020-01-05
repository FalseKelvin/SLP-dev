/*
  Obtain SLP token statistics via its token ID.
*/

const TOKENID =
  "b13697c3d621e476bc5d3efd404bd3e5051482649a8f0e6a87989d134d67247c" // PANDA token ID

const SLPSDK = require("../../lib/SLP") // amend depending on where you store this relative to SLP SDK

// Instantiate SLP via mainnet
const SLP = new SLPSDK({ restURL: `https://rest.bitcoin.com/v2/` })
// const SLP = new SLPSDK({ restURL: `https://trest.bitcoin.com/v2/` }) // uncomment to use testnet

async function getTokenStats() {
  try {
    console.log(await SLP.Utils.tokenStats(TOKENID))
  } catch (err) {
    console.error(`Error in tokenStats: `, err)
    throw err
  }
}

getTokenStats()
