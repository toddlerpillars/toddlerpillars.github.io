export { getContract } from "./contract"

export const getTokensUri = async (
  tokenIds,
  contract
) => {
  const newMetadata = [];
  const promises = [];
  for (var i = 0; i < tokenIds.length; i++) {
    const tokenId = tokenIds[i]
    promises.push(new Promise(async (resolve) => {
      const tokenURI = contract["tokenURI"] ? contract["tokenURI"] : contract["tokenURI(uint256)"]
      let tokenUri = await tokenURI(tokenId)
        .catch((err) => console.error(err));
      // console.log(tokenId)
      if (tokenUri) {
        const metadata = await getTokenUri(tokenId, tokenUri);
        metadata.tokenAddress = contract.address;
        newMetadata.push(metadata);
      }
      resolve()
    }))
  }

  console.time(`fetching tokenUri`)
  await Promise.all(promises)
  console.timeEnd(`fetching tokenUri`)

  // console.log(newMetadata)
  return newMetadata.sort((a, b) => {
    return Number(a.tokenId) - Number(b.tokenId)
  });
};

export const getTokenUri = async (tokenId, tokenUri) => {
  console.log(tokenUri)
  const metadata = await fetch(tokenUri)//fetch(`https://toddlerpillars-metadata-server.herokuapp.com/api/metadata/${tokenId % 100}/${tokenId}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
  if (metadata) {
    if (!metadata.tokenId) {
      metadata.tokenId = tokenId;
    }
    return metadata;
  } else
    // Fetching metadata fail, return an object anyway
    return {
      tokenId: tokenId,
    }
};