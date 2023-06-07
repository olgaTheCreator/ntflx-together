type handleLoadMoreProps = {
  handleLoadMore: () => void;
};

export const ButtonLoadMore = ({ handleLoadMore }: handleLoadMoreProps) => {
  return (
    <button
      className="focus:shadow-outline mx-auto mb-20 w-1/2 rounded border-2 border-info-500 bg-info-500 px-4 py-2 text-lg font-bold text-blue-500 shadow-lg  shadow-yellow-500 transition-colors duration-200 hover:bg-info-300  focus:outline-none"
      onClick={handleLoadMore}
    >
      Load more...
    </button>
  );
};
