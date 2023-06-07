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
      className="focus:shadow-outline mx-auto inline-flex w-full items-center justify-between rounded-t bg-info-500 px-4 py-3 text-center  text-2xl font-semibold text-blue-100 shadow transition-colors duration-200 focus:outline-none active:bg-orange lg:hover:bg-info-400 lg:hover:text-blue-400"
      onClick={() => handleSetIndex(index)}
    >
      {title}
      {activeIndex === index ? <IconShrink /> : <IconExpand />}
    </button>
  );
};
