import * as React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { ButtonSwipe } from './components/buttons/ButtonSwipe';
import { IconSwipeLeft } from './components/icons/IconSwipeLeft';
import { IconSwipeRight } from './components/icons/IconSwipeRight';

// eslint-disable-next-line no-undef, no-restricted-globals
// new EventSource('/esbuild').addEventListener('change', () => location.reload());
const fe = (url: string) => axios.get(`http://0.0.0.0:3000/${url}`).then((res) => res.data as {});

export function App() {
  <>
    <Routes>
      {/* <Route path="/" element={<Loved />} /> */}
      {/* <Route path="/products" element={<Products />} />
       <Route path="/about" element={<About />} /> */}
    </Routes>
  </>;
  const { data, error, isLoading } = useSWR('results', fe);

  // return <div>{`${JSON.stringify({ data, isLoading, error })}`}</div>;
  return (
    <>
      <ButtonSwipe variant="green">
        <IconSwipeLeft styles="h-4 w-4 md:h-9 md:w-9" />
      </ButtonSwipe>
      <ButtonSwipe variant="red">
        <IconSwipeRight styles="h-4 w-4 md:h-9 md:w-9" />
      </ButtonSwipe>
      <div className="text-lg font-bold text-warning-400">{JSON.stringify(data)}</div>
    </>
  );
}

// /* CSS HEX */
// --oxford-blue: #051338ff;
// --cambridge-blue: #7ca982ff;
// --seasalt: #fafafaff;
// --bittersweet-shimmer: #c83e4dff;
// --atomic-tangerine: #ff934fff;

// /* CSS HSL */
// --oxford-blue: hsla(224, 84%, 12%, 1);
// --cambridge-blue: hsla(128, 21%, 57%, 1);
// --seasalt: hsla(0, 0%, 98%, 1);
// --bittersweet-shimmer: hsla(353, 56%, 51%, 1);
// --atomic-tangerine: hsla(23, 100%, 65%, 1);

// {
//   "Primary": {
//     "50": "#e3e6ec",
//     "100": "#b9bfd1",
//     "200": "#8d97b2",
//     "300": "#627093",
//     "400": "#43537f",
//     "500": "#23396d",
//     "600": "#1d3265",
//     "700": "#152a5b",
//     "800": "#0e214f",
//     "900": "#051338"
//   },
//   "Secondary": {
//     "50": "#ffffec",
//     "100": "#fffacc",
//     "200": "#fff5aa",
//     "300": "#fff089",
//     "400": "#ffea71",
//     "500": "#ffe55c",
//     "600": "#ffdc5f",
//     "700": "#ffce61",
//     "800": "#ffb85b",
//     "900": "#ff924f"
//   }
// }

// "color-primary-100": "#C8D9F5",
// "color-primary-200": "#95B4EB",
// "color-primary-300": "#587BC3",
// "color-primary-400": "#2A4787",
// "color-primary-500": "#051338",
// "color-primary-600": "#030E30",
// "color-primary-700": "#020A28",
// "color-primary-800": "#010720",
// "color-primary-900": "#00051A",
// "color-success-100": "#F0FAED",
// "color-success-200": "#DFF6DC",
// "color-success-300": "#C2E5C0",
// "color-success-400": "#A2CBA4",
// "color-success-500": "#7ca982",
// "color-success-600": "#5A9167",
// "color-success-700": "#3E7951",
// "color-success-800": "#27623F",
// "color-success-900": "#175134",
// "color-info-100": "#C7F9ED",
// "color-info-200": "#92F3E3",
// "color-info-300": "#58DCD2",
// "color-info-400": "#2EB9BA",
// "color-info-500": "#00808C",
// "color-info-600": "#006478",
// "color-info-700": "#004B64",
// "color-info-800": "#003651",
// "color-info-900": "#002743",
// "color-warning-100": "#FBF5C9",
// "color-warning-200": "#F7EA95",
// "color-warning-300": "#E9D35E",
// "color-warning-400": "#D3B735",
// "color-warning-500": "#B79301",
// "color-warning-600": "#9D7B00",
// "color-warning-700": "#836400",
// "color-warning-800": "#6A4E00",
// "color-warning-900": "#573F00",
// "color-danger-100": "#FCE2D9",
// "color-danger-200": "#F9C0B4",
// "color-danger-300": "#EE938B",
// "color-danger-400": "#DE6B6D",
// "color-danger-500": "#c83e4d",
// "color-danger-600": "#AC2D46",
// "color-danger-700": "#901F40",
// "color-danger-800": "#741338",
// "color-danger-900": "#600B33"
// }
