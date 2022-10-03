/**
 * @notice Normalizes ipfs URIs into browser compatible URLs.
 * @param inputURI The raw URI from ipfs sources.
 */
export const convertLinkToIpfs = (inputURI) => {
    if (inputURI.includes("ipfs://")) {
      return (
        "https://ipfs.io/ipfs/" + inputURI.substring(inputURI.indexOf("//") + 2)
      );
    } else {
      return inputURI;
    }
  };

export const getImageUrl = async (inputUrl) => {
  const fetched = JSON.parse(await fetch(inputUrl));
  return fetched['image_url'];
}
