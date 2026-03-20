export interface ClubEvent {
  id: number
  title: string
  description: string
  date: string
  votes: number
  confirmed: boolean
  createdAt: string
}

export type NewClubEvent = Omit<ClubEvent, 'id' | 'votes' | 'confirmed' | 'createdAt'>
