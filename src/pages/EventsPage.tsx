import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { PageContainer } from '../components/common/PageContainer'
import { EventList } from '../components/events/EventList'
import { EventProposalForm } from '../components/events/EventProposalForm'
import { useEvents } from '../hooks/useEvents'

export const EventsPage = () => {
  const { t } = useTranslation()
  const { events, loading, error, proposeEvent, upvoteEvent } = useEvents()

  return (
    <PageContainer>
      <Stack spacing={3}>
        <Typography variant="h4">{t('eventsPage.title')}</Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {loading ? (
          <Stack alignItems="center" className="py-8">
            <CircularProgress />
          </Stack>
        ) : (
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, md: 5 }}>
              <EventProposalForm onSubmit={proposeEvent} />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <EventList events={events} onVote={upvoteEvent} />
            </Grid>
          </Grid>
        )}
      </Stack>
    </PageContainer>
  )
}
