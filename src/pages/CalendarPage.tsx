import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import { PageContainer } from '../components/common/PageContainer'
import { ConfirmedEventsCalendar } from '../components/events/ConfirmedEventsCalendar'
import { useEvents } from '../hooks/useEvents'

export const CalendarPage = () => {
  const { confirmedEvents, loading, error } = useEvents()

  return (
    <PageContainer>
      <Stack spacing={3}>
        {error && <Alert severity="error">{error}</Alert>}
        {loading ? (
          <Stack alignItems="center" className="py-8">
            <CircularProgress />
          </Stack>
        ) : (
          <ConfirmedEventsCalendar events={confirmedEvents} />
        )}
      </Stack>
    </PageContainer>
  )
}
