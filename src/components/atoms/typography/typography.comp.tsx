import * as Styles from './typography.styles'
import { TypographyProps } from './typography.types'

export const Typography: React.FC<TypographyProps> = ({ type, children }) => {
  return <Styles.Typography type={type}>{children}</Styles.Typography>
}
