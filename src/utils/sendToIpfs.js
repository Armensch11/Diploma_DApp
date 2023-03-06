import { create } from 'ipfs-http-client';

export default async function sendToIPFS(data) {
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
  let cid = "";
  try {
    const send = await ipfs.add(JSON.stringify(data));
    //console.log('result after send is ', send);
    cid = send.path;
    //console.log('Added to IPFS:', cid);
  } catch (error) {
    console.log(error);
  }

  return cid;
}

//pinata details

// JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI5ZTc4NDRiMy0yZWY5LTQzN2ItOWY5Ni01ODg4NDk2YzA2NDIiLCJlbWFpbCI6ImFybWVuc2NoQG1haWwucnUiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNzZjMGI3OWNlNzc2ZTA2OWVmNTkiLCJzY29wZWRLZXlTZWNyZXQiOiI3OTkyYmE1MTk3ZTY3NjYxZjE0ZTQzNTExOGMyZmE2NTJjMTQ2MzdhMTFkMjM2MTQ2NzY1N2UyNDUxNjQyZTgyIiwiaWF0IjoxNjc2NTQ1ODYzfQ.kJXIdD2mUZDxGpJGaY2XlztTzXudOSBVQ2guA5iNqMc
