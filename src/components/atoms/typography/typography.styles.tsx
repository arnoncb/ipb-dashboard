import styled, { css } from 'styled-components'

import { TypographyType } from './typography.types'

export const Typography = styled.span<{ type: string }>`
  font-family: Manrope, sans-serif;
  color: #202020;
  ${(props) => {
    switch (props.type) {
      case TypographyType.TITLE:
        return titleStyle
      case TypographyType.SUBTITLE:
        return subtitleStyle
      case TypographyType.BODY:
        return bodyStyle
    }
  }}
`
const titleStyle = css`
  font-size: 32px;
  font-weight: 700;
`
const subtitleStyle = css`
  font-size: 24px;
  margin-bottom: 16px;
`
const bodyStyle = css`
  font-size: 14px;
  margin-bottom: 8px;
`
