export const generateCloudflareIpfsUrl = (ipfsUrl: string) => {
  // original looks like this "https://ipfs.io/ipfs/Qmc3zYWXxeTSNwkcMPMVAu1WQemm3tu3fNkm7hfTKrLGh7/1102.png"
  // we want to convert it to "https://cloudflare-ipfs.com/ipfs/Qmc3zYWXxeTSNwkcMPMVAu1WQemm3tu3fNkm7hfTKrLGh7/1102.png"

  const ipfsUrlParts = ipfsUrl.split('/');
  ipfsUrlParts[2] = 'gateway.pinata.cloud';
  return ipfsUrlParts.join('/');
};
