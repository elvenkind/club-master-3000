import { apiClient } from '../lib/apiClient'
import { CONFIRMATION_VOTE_THRESHOLD } from '../lib/constants'
import type { ClubEvent, NewClubEvent } from '../types/event'

export const eventService = {
  async list(): Promise<ClubEvent[]> {
    const response = await apiClient.get<ClubEvent[]>('/events')
    return response.data
  },

  async create(event: NewClubEvent): Promise<ClubEvent> {
    const payload: Omit<ClubEvent, 'id'> = {
      ...event,
      votes: 0,
      confirmed: false,
      createdAt: new Date().toISOString(),
    }
    const response = await apiClient.post<ClubEvent>('/events', payload)
    return response.data
  },

  async upvote(event: ClubEvent): Promise<ClubEvent> {
    const votes = event.votes + 1
    const confirmed = votes >= CONFIRMATION_VOTE_THRESHOLD
    const response = await apiClient.patch<ClubEvent>(`/events/${event.id}`, {
      votes,
      confirmed,
    })
    return response.data
  },
}
