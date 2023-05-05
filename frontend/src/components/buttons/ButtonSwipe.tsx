import * as React from 'react';

interface ButtonSwipeProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant: 'red' | 'green';
}

export const ButtonSwipe = (props: ButtonSwipeProps) => {
  const { children, variant, ...rest } = props;
  return (
    <button
      className={`inline-flex h-4 items-center rounded-none text-lg md:h-9 bg-${variant}-500 text-black, py-5, px-5 hover:bg-${variant}-700 transition-colors duration-150`}
      {...rest}
    >
      {children}
    </button>
  );
};
