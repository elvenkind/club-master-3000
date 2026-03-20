import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import type { NewClubEvent } from '../../types/event'

interface EventProposalFormProps {
  onSubmit: (event: NewClubEvent) => Promise<void>
}

const initialState: NewClubEvent = {
  title: '',
  description: '',
  date: '',
}

export const EventProposalForm = ({ onSubmit }: EventProposalFormProps) => {
  const { t } = useTranslation()
  const [form, setForm] = useState<NewClubEvent>(initialState)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (field: keyof NewClubEvent, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.title.trim() || !form.date) {
      return
    }

    setSubmitting(true)
    try {
      await onSubmit(form)
      setForm(initialState)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Card className="retro-form-card">
      <CardContent>
        <Typography variant="h6" className="mb-4 retro-panel-title">
          {t('eventForm.title')}
        </Typography>
        <form onSubmit={handleSubmit} className="retro-form">
          <Stack spacing={2.25}>
            <TextField
              className="retro-input"
              label={t('eventForm.nameLabel')}
              value={form.title}
              onChange={(event) => handleChange('title', event.target.value)}
              required
            />
            <TextField
              className="retro-input"
              label={t('eventForm.descriptionLabel')}
              value={form.description}
              onChange={(event) => handleChange('description', event.target.value)}
              multiline
              minRows={3}
            />
            <TextField
              className="retro-input"
              label={t('eventForm.dateLabel')}
              type="date"
              value={form.date}
              onChange={(event) => handleChange('date', event.target.value)}
              InputLabelProps={{ shrink: true }}
              required
            />
            <Button
              variant="contained"
              type="submit"
              disabled={submitting}
              className="min-h-[48px] retro-submit-button"
            >
              {submitting ? t('eventForm.saving') : t('eventForm.submit')}
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  )
}
