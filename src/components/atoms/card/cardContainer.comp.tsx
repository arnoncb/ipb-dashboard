import * as Styles from './cardContainer.styles'
import { CardContainerProps } from './cardContainer.types'

export const CardContainer: React.FC<CardContainerProps> = ({ children }) => {
  return <Styles.CardContainer>{children}</Styles.CardContainer>
}
