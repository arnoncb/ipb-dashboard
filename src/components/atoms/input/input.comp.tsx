import * as Styles from './input.styles'
import { InputProps } from './input.types'

export const Input: React.FC<InputProps> = ({ onChange, value }) => {
  return <Styles.Input onChange={onChange} value={value} />
}
