import { Typography } from '@atoms/typography/typography.comp'
import { TypographyType } from '@atoms/typography/typography.types'
import { PageWrapper } from '@templates/global.styles'
import { Card } from 'components/molecules/card/card.comp'

import * as Styles from './events.styles'

const EventsTemplate: React.FC = () => {
  const events = [
    {
      _id: '62dc57067537d769bbbc2316',
      type: 'Reunião de Sábado',
      date: '2022-07-23T19:36:38.160Z',
      location: '1ª IPB Lavras',
      songs: [],
      musicGroup: [],
      attendanceList: ['62dc63b7588351d5b6c39ad2'],
      subject: 'Acopalices',
      __v: 0,
    },
    {
      _id: '62dc57067537d769bbbc2316',
      type: 'Reunião de Sábado',
      date: '2022-07-23T19:36:38.160Z',
      location: '1ª IPB Lavras',
      songs: [],
      musicGroup: [],
      attendanceList: ['62dc63b7588351d5b6c39ad2'],
      subject: 'Acopalices',
      __v: 0,
    },
    {
      _id: '62dc57067537d769bbbc2316',
      type: 'Reunião de Sábado',
      date: '2022-07-23T19:36:38.160Z',
      location: '1ª IPB Lavras',
      songs: [],
      musicGroup: [],
      attendanceList: ['62dc63b7588351d5b6c39ad2'],
      subject: 'Acopalices',
      __v: 0,
    },
  ]

  return (
    <PageWrapper>
      <Typography type={TypographyType.TITLE}>Eventos</Typography>
      <Styles.CardWrapper>
        {events.map((event) => (
          <Card title={event.type}>
            <Typography type={TypographyType.BODY}>Data: {event.date}</Typography>
            <Typography type={TypographyType.BODY}>Número de presentes: {event.attendanceList.length}</Typography>
            <Typography type={TypographyType.BODY}>Local: {event.location}</Typography>
            <Typography type={TypographyType.BODY}>Assunto: {event.subject}</Typography>
          </Card>
        ))}
      </Styles.CardWrapper>
    </PageWrapper>
  )
}

export default EventsTemplate
