import { ButtonFriends } from './buttons/ButtonFriends';

interface AccordionQrProps {
  handleSetIndex: (index: number) => void;
  children?: React.ReactNode;
  title: string;
  activeIndex: number;
  index: number;
}
export const AccordionQr = (props: AccordionQrProps) => {
  const { title, handleSetIndex, children, index, activeIndex } = props;

  return (
    <div>
      <ButtonFriends activeIndex={activeIndex} title={title} index={index} handleSetIndex={handleSetIndex} />
      {activeIndex === index && <div className="bg-orange">{children}</div>}
    </div>
  );
};
