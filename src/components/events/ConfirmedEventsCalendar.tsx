import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import type { ClubEvent } from '../../types/event'

interface ConfirmedEventsCalendarProps {
  events: ClubEvent[]
}

export const ConfirmedEventsCalendar = ({ events }: ConfirmedEventsCalendarProps) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" className="mb-4">
          Tapahtumakalenteri
        </Typography>
        {events.length === 0 ? (
          <Typography color="text.secondary">Ei vahvistettuja tapahtumia vielä.</Typography>
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
