import { create } from 'ipfs-http-client';

export default async function getFromIPFS(cid) {
  //   const apiEndpoint = process.env.PINATA_ENDPOINT;

  const projectId = process.env.INFURA_ID;
  const projectSecret = process.env.INFURA_KEY;

  const ipfs = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: `Basic ${Buffer.from(
        `${projectId}:${projectSecret}`
      ).toString('base64')}`,
    },
  });
  let data = {};
  for await (const chunk of ipfs.cat(cid)) {
    data = JSON.parse(Buffer.from(chunk).toString('utf8'));
  }

  // console.log(data);
  return data;
}
