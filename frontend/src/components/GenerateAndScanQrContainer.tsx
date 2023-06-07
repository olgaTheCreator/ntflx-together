import { useState } from 'react';
import QRCode from 'react-qr-code';
import { AccordionQr } from './AccordionQr';
import { http_url } from '../context/Url';
import { useUserContext } from '../context/Context';
import { QrScaner } from './QrScaner';
import { Outlet } from 'react-router-dom';

export const GenerateAndScanQrContainer = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  const handleSetIndex = (index: number) => setActiveIndex(index === activeIndex ? 3 : index);
  const { uuid_public, username } = useUserContext();
  const QrValue = `http://192.168.0.103/watch-together/add-friend/${uuid_public}`;

  return (
    <div className="flex flex-col justify-center gap-5 p-5">
      <AccordionQr title="Share your URL" index={1} activeIndex={activeIndex} handleSetIndex={handleSetIndex}>
        <div className="p-8">
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
            value={QrValue}
            viewBox={`0 0 256 256`}
          />
        </div>
      </AccordionQr>
      <AccordionQr title="Scan a Friend" index={2} activeIndex={activeIndex} handleSetIndex={handleSetIndex}>
        <QrScaner />
      </AccordionQr>
      <AccordionQr title="Friends" index={3} activeIndex={activeIndex} handleSetIndex={handleSetIndex}>
        <div className="h-32 w-32 rounded-xl p-4 shadow-lg shadow-blue-700">
          <Outlet />
        </div>
      </AccordionQr>
    </div>
  );
};
