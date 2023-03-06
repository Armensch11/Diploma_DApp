import getCallMethod from './getCallMethod';
import getFromIPFS from './getFromIpfs';
import getFromEvent from './getFromEvent';

const searchByAddress = async (searchTerm, setter, loadingSetter) => {
  let method = null;
  loadingSetter(true);
  //in case window.ethereum is not available, the search will also work as intended
  if (window.ethereum) {
    method = await getCallMethod(window.ethereum, 'getStudentDiplomas');
  } else {
    method = await getCallMethod(null, 'getStudentDiplomas');
  }
  const result = await method(searchTerm);
  let hashIdPairs = {};
  try {
    console.log(searchTerm);
    hashIdPairs = await getFromEvent(searchTerm.trim(), 300000);
  } catch (error) {
    console.log(error);
  }
  // const hashIdPairs = await getFromEvent(searchTerm, 300000);
  // console.log(hashIdPairs);

  // console.log(hashToId);
  const jsonArray = [];
  if (result.length) {
    for (const uri of result) {
      const cid = uri.substring(21);
      const getJson = await getFromIPFS(cid);
      getJson.id = hashIdPairs[getJson.dataHash];
      jsonArray.push(getJson);
    }
    console.log(jsonArray);
    setter([...jsonArray]);
    loadingSetter(false);
  }
};
export default searchByAddress;
