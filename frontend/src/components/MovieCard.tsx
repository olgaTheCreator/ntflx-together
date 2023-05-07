import img from '../assets/Netflix_Symbol_RGB.png';

export const MovieCard = () => {
  return (
    <>
      <div className="relative m-5 flex h-full max-w-sm flex-wrap justify-center overflow-hidden rounded">
        <img
          className="max-h-3/4 w-full"
          src="https://image.tmdb.org/t/p/w780/splV83B3CqMCbHUunoyaUoRUM60.jpg"
          alt="Sunset in the mountains"
        />
        <div className="flex max-h-48 justify-between py-4 text-white">
          <img className="object-scale-down" src={img} alt="Sunset  mountains" />
          <h1 className="text-4xl font-medium">The Coldest Sunset</h1>
          {/* <p className="text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
            eaque, exercitationem praesentium nihil.
          </p> */}
        </div>
      </div>
      {/* <div className="max-w-xs overflow-hidden rounded-lg shadow-lg">
        <img
          className="h-48 w-full object-cover"
          src="https://image.tmdb.org/t/p/w780/8XWX3z1XAqmmXOnc9d4FSjbWVNG.jpg"
          alt="Flower and sky"
        />
        <div className="px-6 py-4">
          <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">This is the title</h4>
          <p className="leading-normal text-gray-700">
            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum
            maiores sequi nam tenetur laud.
          </p>
        </div>
      </div> */}
    </>
  );
};
