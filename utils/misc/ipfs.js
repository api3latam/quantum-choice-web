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
  const response = await fetch(inputUrl);
  const raw = await response.json();
  const toReturn = raw['image'] === undefined 
    ? raw['animation']
    : raw['image'] 
  return toReturn;
}
