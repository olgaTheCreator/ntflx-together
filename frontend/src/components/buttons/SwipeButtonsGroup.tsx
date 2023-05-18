import { ButtonSwipe } from './ButtonSwipe';
import { IconSwipeLeft } from '../icons/IconSwipeLeft';
import { IconSwipeRight } from '../icons/IconSwipeRight';

interface SwipeButtonGroupProps {
  handleSwipe: (liked: 'yes' | 'no') => () => Promise<void>;
}

export const SwipeButtonGroup = ({ handleSwipe: handleSwipe }: SwipeButtonGroupProps) => {
  return (
    <div className="absolute top-0 flex w-full justify-between place-self-start">
      <ButtonSwipe variant="red" handleSwipe={handleSwipe('no')}>
        <IconSwipeLeft styles="h-12 w-12 md:h-12 md:w-12" />
      </ButtonSwipe>
      <ButtonSwipe variant="green" handleSwipe={handleSwipe('yes')}>
        <IconSwipeRight styles="h-12 w-12 md:h-12 md:w-12" />
      </ButtonSwipe>
    </div>
  );
};
