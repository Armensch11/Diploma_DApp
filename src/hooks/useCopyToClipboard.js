import { useState } from 'react';

import { toast } from 'react-hot-toast';

export const useCopyToClipboard = () => {
  const [copiedText, setCopiedText] = useState(null);

  const copy = async (text) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      toast.success('Copied Successfully', { duration: 2000 });
    } catch (error) {
      console.warn('Copy failed', error);
      setCopiedText(null);
      return;
    }
  };

  return {
    copiedText,
    copy,
  };
};
