import { IconExpand } from '../icons/IconExpand';
import { IconShrink } from '../icons/IconShrink';

interface ButtonFriendsProps {
  handleSetIndex: (index: number) => void;
  children?: React.ReactNode;
  title: string;
  index: number;
  activeIndex: number;
}

export const ButtonFriends = (props: ButtonFriendsProps) => {
  const { title, handleSetIndex, index, activeIndex } = props;

  return (
    <button
      className="focus:shadow-outline mx-auto inline-flex w-full items-center justify-between rounded border-2 border-info-500 bg-info-500 px-4 py-3 text-center  text-xl font-bold text-white  shadow transition-colors duration-200 hover:bg-info-300 hover:text-blue-500 focus:outline-none active:bg-orange"
      onClick={() => handleSetIndex(index)}
    >
      {title}
      {activeIndex === index ? <IconShrink /> : <IconExpand />}
    </button>
  );
};
