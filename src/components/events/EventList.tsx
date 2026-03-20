import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
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
      <Paper className="p-6">
        <Typography color="text.secondary">{t('eventList.empty')}</Typography>
      </Paper>
    )
  }

  return (
    <Paper>
      <List>
        {events.map((event) => (
          <ListItem
            key={event.id}
            divider
            secondaryAction={
              <Stack direction="row" spacing={1}>
                {event.confirmed && <Chip size="small" color="success" label={t('eventList.confirmed')} />}
                <VoteButton event={event} onVote={onVote} />
              </Stack>
            }
          >
            <ListItemText
              primary={event.title}
              secondary={`${event.date} • ${event.description || t('eventList.noDescription')}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}
