import Chip from '@mui/material/Chip'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { VoteButton } from './VoteButton'
import type { ClubEvent } from '../../types/event'

interface EventListProps {
  events: ClubEvent[]
  onVote: (event: ClubEvent) => void
}

export const EventList = ({ events, onVote }: EventListProps) => {
  const { t } = useTranslation()

  if (events.length === 0) {
    return (
      <Paper className="retro-list-panel p-6">
        <Typography color="text.secondary">{t('eventList.empty')}</Typography>
      </Paper>
    )
  }

  return (
    <Paper className="retro-list-panel p-3 sm:p-4">
      <Stack spacing={1.5}>
        {events.map((event, index) => (
          <Stack
            key={event.id}
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            spacing={2}
            className="retro-event-card"
            sx={{ animationDelay: `${index * 90}ms` }}
          >
            <div>
              <Typography variant="h6" className="retro-event-title">
                {event.title}
              </Typography>
              <Typography className="retro-event-meta">
                {event.date} - {event.description || t('eventList.noDescription')}
              </Typography>
            </div>
            <Stack direction="row" spacing={1} alignItems="center" className="w-full sm:w-auto">
              {event.confirmed && (
                <Chip size="small" label={t('eventList.confirmed')} className="retro-status-badge" />
              )}
              <VoteButton event={event} onVote={onVote} />
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Paper>
  )
}
