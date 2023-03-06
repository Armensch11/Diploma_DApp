import { memo, useCallback, useEffect } from 'react';

import {
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Grid,
} from '@mui/material';

import { useState } from 'react';

import toast from 'react-hot-toast';
import sendToIPFS from '@/utils/sendToIpfs';
import getFromIPFS from '@/utils/getFromIpfs';

import getSendMethod from '@/utils/getSendMethod';
import provideContract from '../../../utils/provideContact';

import { utils } from 'ethers';
import { useFormik } from 'formik';
import { ClimbingBoxLoader } from 'react-spinners';

import AddForm2 from './AddForm2';

import CreateDialog from '@/components/CreateDialog';
import { useRouter } from 'next/router';
const CreateForm = () => {
  const [dataHash, setDataHash] = useState('');
  const [loading, setLoading] = useState(false);
  const [tokenId, setTokenId] = useState('');
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const { values, handleChange, setFieldValue, resetForm } = useFormik({
    initialValues: {
      // name: '',
      // surname: '',
      faculty: '',
      from: '',
      to: '',
      gpa: '',
      studentAddress: '',
      degreeType: '',
      withHonor: false,
    },
  });

  const generateHash = useCallback(() => {
    const toBytes = utils.toUtf8Bytes(JSON.stringify(values));
    const hashed = utils.keccak256(toBytes);
    console.log('hash is', hashed);
    setDataHash(hashed);
  }, [values]);

  const handleCreate = () => {
    //handle get cid and tokenId mint
    console.log(values);

    let cid = '';
    let tokenURI = 'https://ipfs.io/ipfs';
    const stateWithHash = { ...values, dataHash };
    setLoading(true);
    const generateCID = async (data) => {
      try {
        const responceAfterSend = await sendToIPFS(data);

        cid = responceAfterSend;
      } catch (error) {
        console.log(error);
      }

      tokenURI = 'https://ipfs.io/ipfs/' + cid;
      console.log(tokenURI);

      try {
        mintDiplomaID(dataHash, tokenURI, values.studentAddress.trim());
      } catch (error) {
        console.log(error);
      }
      await getFromIPFS(cid);

      return cid;
    };

    cid = generateCID(stateWithHash);

    const mintDiplomaID = async (dataHash, cid, studentAddress) => {
      const mint = await getSendMethod('addDiploma');
      const contract = await provideContract();
      try {
        console.log(dataHash);
        const tx = await mint(dataHash, cid, studentAddress);
        const receipt = await tx.wait();
      } catch (error) {
        console.log(' you rejected signing transaction at Metamask ');
        router.push('/create');
        setLoading(false);
      }

      //console.log(receipt.events[1].event);
      contract.on('DiplomaAdded', (hash, address, tokenId) => {
        console.log('stuck here');
        setLoading(false);
        setTokenId(tokenId.toString());
        setModal(true);
        console.log(
          `you are lucky, your diploma number is ${tokenId.toString()} minted to your provided address ${address.toString()}`
        );

        toast.success('Diploma Added Successfully', {
          duration: 1000,
        });
      });
    };
  };

  return (
    <>
      {loading ? (
        <Grid
          container
          height="80vh"
          sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <ClimbingBoxLoader
            loading={loading}
            color="#4248f5"
            //cssOverride={override}
            size={35}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </Grid>
      ) : (
        <>
          {modal ? (
            <CreateDialog
              reset={resetForm}
              values={values}
              tokenId={tokenId}
              setModal={setModal}
            />
          ) : (
            <AddForm2
              values={values}
              handleChange={handleChange}
              setFieldValue={setFieldValue}
              handleCreate={handleCreate}
              generateHash={generateHash}
            />
          )}
        </>
      )}
      {/* // {modal && <CreatedModal setModal={setModal} reset={resetForm} />} */}
    </>
  );
};

export default memo(CreateForm);
