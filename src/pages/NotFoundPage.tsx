import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { PageContainer } from '../components/common/PageContainer'

export const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <PageContainer>
      <Typography variant="h4">{t('notFound.title')}</Typography>
    </PageContainer>
  )
}
