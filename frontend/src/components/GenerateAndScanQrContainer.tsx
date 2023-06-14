import { useState } from 'react';
import QRCode from 'react-qr-code';
import { AccordionQr } from './AccordionQr';
import { useUserContext } from '../context/Context';
import { QrScaner } from './QrScaner';
import { FriendsContainer } from './FriendsContainer';
import { FriendsState } from './FriendsContainer';
import { http_url_front } from '../context/Url_front';

export const GenerateAndScanQrContainer = (props: FriendsState) => {
  const { friends, setFriends } = props;
  const [activeIndex, setActiveIndex] = useState(3);
  const handleSetIndex = (index: number) => setActiveIndex(index === activeIndex ? 3 : index);
  const { uuid_public, username } = useUserContext();
  const QrValue = `${http_url_front}/watch-together/add-friend/${uuid_public}`;

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
        <div className="">
          <FriendsContainer friends={friends} setFriends={setFriends} />
        </div>
      </AccordionQr>
    </div>
  );
};
