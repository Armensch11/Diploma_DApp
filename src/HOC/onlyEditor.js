import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import checkIsEditor from '@/utils/checkIsEditor';
import { useSelector } from 'react-redux';
import { selectAuth } from '@/features/ConnectWallet/connectWalletSlice';

export default function onlyEditor(Component) {
  return () => {
    const { address } = useSelector(selectAuth);
    const [isEditor, setIsEditor] = useState(false);
    const router = useRouter();
    const check = useCallback(async () => {
      console.log(address);
      try {
        const temp = checkIsEditor(address);
        setIsEditor(temp);
        if (!isEditor) {
          router.push('/'); // redirect the user to the login page
        }
      } catch (error) {
        console.log(error);
      }
    }, [address]);

    useEffect(() => {
      try {
        check();
      } catch (error) {
        console.log(error);
      }
    }, []);

    return <Component />;
  };
}
