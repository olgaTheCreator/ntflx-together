import QRCode from 'react-qr-code';
import { useUserContext } from '../context/UserContext';
import { http_url_front } from '../context/Url_front';
import { ButtonCopy } from './buttons/ButtonCopy';

const copyTextToClipboard = async (text: string) => {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
};

export const ShareYourUrl = () => {
  const { uuid_public } = useUserContext();
  const QrValue = `${http_url_front}/qr/${uuid_public}`;

  return (
    <>
      <div className="px-8 pb-4 pt-8 max-w-sm">
        <QRCode
          size={256}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value={QrValue}
          viewBox={`0 0 256 256`}
        />
      </div>
      <div className="flex place-items-start justify-between px-2 text-blue-500 relative">
        <div className="break-words px-2 pb-4 w-4/5 ">{QrValue}</div>
        <ButtonCopy handleCopy={copyTextToClipboard(QrValue)} />
      </div>
    </>
  );
};
