import BoxText from '../../assets/box-text.png';

import { CardBoardContainer, Img } from './styles'

interface CardBoardProps {
  width: number;
}

export function CardBoard(props: CardBoardProps) {
  return (
    <>
      <CardBoardContainer width={props.width}>
        <Img src={BoxText} className="single" />
      </CardBoardContainer>
    </>
  )
}