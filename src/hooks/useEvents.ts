import { useCallback, useEffect, useMemo, useState } from 'react'
import i18n from '../i18n'
import { eventService } from '../services/eventService'
import type { ClubEvent, NewClubEvent } from '../types/event'

export const useEvents = () => {
  const [events, setEvents] = useState<ClubEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadEvents = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await eventService.list()
      setEvents(data)
    } catch {
      setError(i18n.t('errors.loadEvents'))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void loadEvents()
  }, [loadEvents])

  const proposeEvent = useCallback(async (payload: NewClubEvent) => {
    const created = await eventService.create(payload)
    setEvents((prev) => [created, ...prev])
  }, [])

  const upvoteEvent = useCallback(async (event: ClubEvent) => {
    const updated = await eventService.upvote(event)
    setEvents((prev) => prev.map((item) => (item.id === updated.id ? updated : item)))
  }, [])

  const confirmedEvents = useMemo(
    () => events.filter((event) => event.confirmed).sort((a, b) => a.date.localeCompare(b.date)),
    [events],
  )

  return {
    events,
    confirmedEvents,
    loading,
    error,
    loadEvents,
    proposeEvent,
    upvoteEvent,
  }
}
