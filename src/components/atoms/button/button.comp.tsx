import * as Styles from './button.styles'
import { ButtonProps } from './button.types'

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <Styles.Button>{children}</Styles.Button>
}
