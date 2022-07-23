export interface TypographyProps {
  children: React.ReactNode
  type: TypographyType
}

export enum TypographyType {
  TITLE = 'title',
  BODY = 'body',
  SUBTITLE = 'subtitle',
}
