import { CardContainer } from '@atoms/card/cardContainer.comp'
import { Typography } from '@atoms/typography/typography.comp'
import { TypographyType } from '@atoms/typography/typography.types'

import { CardProps } from './card.types'

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <CardContainer>
      <Typography type={TypographyType.SUBTITLE}>{title}</Typography>
      {children}
    </CardContainer>
  )
}
