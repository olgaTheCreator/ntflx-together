import { ButtonSwipe } from './ButtonSwipe';
import { IconSwipeLeft } from '../icons/IconSwipeLeft';
import { IconSwipeRight } from '../icons/IconSwipeRight';

export const SwipeButtonGroup = () => {
  return (
    <div className="absolute flex w-full justify-between place-self-start">
      <ButtonSwipe variant="red">
        <IconSwipeLeft styles="h-11 w-11 md:h-9 md:w-9" />
      </ButtonSwipe>
      <ButtonSwipe variant="green">
        <IconSwipeRight styles="h-11 w-11 md:h-9 md:w-9" />
      </ButtonSwipe>
    </div>
  );
};
