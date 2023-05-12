import { ButtonSwipe } from './ButtonSwipe';
import { IconSwipeLeft } from '../icons/IconSwipeLeft';
import { IconSwipeRight } from '../icons/IconSwipeRight';

export const SwipeButtonGroup = () => {
  return (
    <div className="absolute top-0 flex w-full justify-between place-self-start">
      <ButtonSwipe variant="red">
        <IconSwipeLeft styles="h-12 w-12 md:h-12 md:w-12" />
      </ButtonSwipe>
      <ButtonSwipe variant="green">
        <IconSwipeRight styles="h-12 w-12 md:h-12 md:w-12" />
      </ButtonSwipe>
    </div>
  );
};
