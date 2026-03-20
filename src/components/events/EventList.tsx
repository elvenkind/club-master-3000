import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { useTranslation } from 'react-i18next'
import { VoteButton } from './VoteButton'
import type { ClubEvent } from '../../types/event'

interface EventListProps {
  events: ClubEvent[]
  onVote: (event: ClubEvent) => void
}

export const EventList = ({ events, onVote }: EventListProps) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  if (events.length === 0) {
    return (
      <Paper className="p-6">
        <Typography color="text.secondary">{t('eventList.empty')}</Typography>
      </Paper>
    )
  }

  return (
    <Paper>
      <List disablePadding>
        {events.map((event) => (
          <ListItem
            key={event.id}
            divider
            className="flex-col items-start sm:flex-row sm:items-center"
            secondaryAction={
              !isMobile ? (
                <Stack direction="row" spacing={1} alignItems="center">
                  {event.confirmed && <Chip size="small" color="success" label={t('eventList.confirmed')} />}
                  <VoteButton event={event} onVote={onVote} />
                </Stack>
              ) : undefined
            }
          >
            <ListItemText
              primary={event.title}
              secondary={`${event.date} • ${event.description || t('eventList.noDescription')}`}
              className={isMobile ? 'w-full' : undefined}
            />
            {isMobile && (
              <Box className="flex items-center gap-2 mt-2 w-full">
                {event.confirmed && <Chip size="small" color="success" label={t('eventList.confirmed')} />}
                <VoteButton event={event} onVote={onVote} />
              </Box>
            )}
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}
