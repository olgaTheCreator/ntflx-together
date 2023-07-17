import { useState } from 'react';
import { AccordionQr } from './AccordionQr';
import { FriendsContainer } from './FriendsContainer';
import { FriendsState } from './FriendsContainer';
import { ShareYourUrl } from './ShareYourUrl';

export const GenerateAndScanQrContainer = (props: FriendsState) => {
  const { friends, setFriends } = props;
  const [activeIndex, setActiveIndex] = useState(2);
  const handleSetIndex = (index: number) => setActiveIndex(index === activeIndex ? 2 : index);

  return (
    <div className="flex w-full flex-col justify-center gap-5 p-5 md:mx-auto lg:max-w-4xl lg:px-0  lg:py-5">
      <AccordionQr title="Share your URL" index={1} activeIndex={activeIndex} handleSetIndex={handleSetIndex}>
        <ShareYourUrl />
      </AccordionQr>
      <AccordionQr title="Friends" index={2} activeIndex={activeIndex} handleSetIndex={handleSetIndex}>
        <div className="">
          <FriendsContainer friends={friends} setFriends={setFriends} />
        </div>
      </AccordionQr>
    </div>
  );
};
