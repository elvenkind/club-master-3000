import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { PageContainer } from '../components/common/PageContainer'

export const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <PageContainer>
      <Paper className="retro-not-found p-6">
        <Typography variant="h4" className="retro-page-title">
          {t('notFound.title')}
        </Typography>
      </Paper>
    </PageContainer>
  )
}
