import * as React from 'react';

export interface ButtonSwipeProps {
  children: React.ReactNode;
  handleSwipe: () => Promise<void>;
  variant: 'red' | 'green';
}

export const ButtonSwipe = (props: ButtonSwipeProps) => {
  const { handleSwipe, children, variant, ...rest } = props;
  return (
    <button
      onClick={handleSwipe}
      className={`h-11 rounded-md text-lg md:h-12 bg-${variant}-500 text-black, py-5, px-5 hover:bg-${variant}-700 transition-colors duration-150`}
      {...rest}
    >
      {children}
    </button>
  );
};
