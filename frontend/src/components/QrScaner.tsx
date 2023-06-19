import { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner, QrcodeSuccessCallback } from 'html5-qrcode';

export const QrScaner = () => {
  const [scanData, setScanData] = useState<string | null>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      {
        qrbox: { width: 280, height: 280 },
        fps: 10,
        // videoConstraints: { facingMode: { exact: 'environment' } }
      },
      false,
    );

    const success = (result: string) => {
      scanner.clear();
      setScanData(result);
    };

    const error = (err: string | undefined) => {
      console.warn(err);
    };

    scanner.render(success, error);
  }, []);

  return (
    <div>
      <div id="reader" className="flex flex-col place-items-center justify-center"></div>
      {scanData && (
        <p className="p-4 text-lg underline">
          <a href={scanData}>{scanData}</a>
        </p>
      )}
    </div>
  );
};
