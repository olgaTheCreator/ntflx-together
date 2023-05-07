import { ButtonSwipe } from './buttons/ButtonSwipe';
import { IconSwipeLeft } from './icons/IconSwipeLeft';
import { IconSwipeRight } from './icons/IconSwipeRight';

export const SwipeButton = () => {
  return (
    <div className="absolute flex w-full justify-between">
      <ButtonSwipe variant="red">
        <IconSwipeLeft styles="h-11 w-11 md:h-9 md:w-9" />
      </ButtonSwipe>
      <ButtonSwipe variant="green">
        <IconSwipeRight styles="h-11 w-11 md:h-9 md:w-9" />
      </ButtonSwipe>
    </div>
  );
};
