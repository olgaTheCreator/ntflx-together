import { AccordionQr } from './AccordionQr';

export const GenerateAndScanQrPres = () => {
  return (
    <div className="flex flex-col justify-center gap-5 p-5">
      <AccordionQr title="Share your URL">QR</AccordionQr>
      <AccordionQr title="Scan a Friend">Scaner</AccordionQr>
      <AccordionQr title="Friends">List of friends</AccordionQr>
    </div>
  );
};
