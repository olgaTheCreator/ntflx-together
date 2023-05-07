import img from '../assets/Netflix_Symbol.png';

export const MovieCard = () => {
  return (
    <>
      <div className="relative m-5 flex max-w-sm flex-col  justify-around overflow-hidden rounded">
        <img
          className="h-auto max-w-full"
          src="https://image.tmdb.org/t/p/w780/splV83B3CqMCbHUunoyaUoRUM60.jpg"
          alt="Sunset in the mountains"
        />

        <div className="mt-5 flex h-32 justify-between py-4 text-white">
          <img className="mr-5 max-h-20 basis-3/4 object-scale-down" src={img} alt="Sunset  mountains" />
          <h1 className="basis-1/2 pl-1 text-4xl font-semibold">The Coldest Sunset</h1>
        </div>
        <div>
          <h2 className="mb-8 text-right  text-xl text-white">movie</h2>
        </div>
      </div>
    </>
  );
};
