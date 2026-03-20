import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import type { ClubEvent } from '../../types/event'

interface ConfirmedEventsCalendarProps {
  events: ClubEvent[]
}

export const ConfirmedEventsCalendar = ({ events }: ConfirmedEventsCalendarProps) => {
  const { t } = useTranslation()

  return (
    <Card className="retro-calendar-card">
      <CardContent>
        <Typography variant="h5" className="mb-4 retro-panel-title">
          {t('calendar.title')}
        </Typography>
        {events.length === 0 ? (
          <Typography color="text.secondary">{t('calendar.empty')}</Typography>
        ) : (
          <List>
            {events.map((event) => (
              <ListItem key={event.id} className="retro-calendar-item">
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', sm: 'center' }}
                  spacing={1.5}
                  className="w-full"
                >
                  <ListItemText primary={event.title} secondary={`${event.date} • 👍 ${event.votes}`} />
                  <Chip
                    size="small"
                    label={t('eventList.confirmed')}
                    className="retro-status-badge"
                  />
                </Stack>
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  )
}
