import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import type { FormEvent } from 'react'
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
    <Card>
      <CardContent>
        <Typography variant="h6" className="mb-4">
          Ehdota tapahtumaa
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Tapahtuman nimi"
              value={form.title}
              onChange={(event) => handleChange('title', event.target.value)}
              required
            />
            <TextField
              label="Kuvaus"
              value={form.description}
              onChange={(event) => handleChange('description', event.target.value)}
              multiline
              minRows={3}
            />
            <TextField
              label="Päivämäärä"
              type="date"
              value={form.date}
              onChange={(event) => handleChange('date', event.target.value)}
              InputLabelProps={{ shrink: true }}
              required
            />
            <Button variant="contained" type="submit" disabled={submitting}>
              {submitting ? 'Tallennetaan...' : 'Lähetä ehdotus'}
            </Button>
          </Stack>
        </form>
      </CardContent>
    </Card>
  )
}
