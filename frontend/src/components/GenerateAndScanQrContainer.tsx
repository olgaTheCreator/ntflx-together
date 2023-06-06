import { useState } from 'react';
import { AccordionQr } from './AccordionQr';

export const GenerateAndScanQrContainer = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  const handleSetIndex = (index: number) => setActiveIndex(index);
  return (
    <div className="flex flex-col justify-center gap-5 p-5">
      <AccordionQr title="Share your URL" index={1} activeIndex={activeIndex} handleSetIndex={handleSetIndex}>
        QR
      </AccordionQr>
      <AccordionQr title="Scan a Friend" index={2} activeIndex={activeIndex} handleSetIndex={handleSetIndex}>
        Scaner
      </AccordionQr>
      <AccordionQr title="Friends" index={3} activeIndex={activeIndex} handleSetIndex={handleSetIndex}>
        List of friends
      </AccordionQr>
    </div>
  );
};
