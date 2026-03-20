import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import type { ClubEvent } from '../../types/event'

interface ConfirmedEventsCalendarProps {
  events: ClubEvent[]
}

export const ConfirmedEventsCalendar = ({ events }: ConfirmedEventsCalendarProps) => {
  const { t } = useTranslation()

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" className="mb-4">
          {t('calendar.title')}
        </Typography>
        {events.length === 0 ? (
          <Typography color="text.secondary">{t('calendar.empty')}</Typography>
        ) : (
          <List>
            {events.map((event) => (
              <ListItem key={event.id} divider>
                <ListItemText primary={event.title} secondary={`${event.date} • 👍 ${event.votes}`} />
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  )
}
