import Button from '@mui/material/Button'
import { useState } from 'react'
import type { ClubEvent } from '../../types/event'

interface VoteButtonProps {
  event: ClubEvent
  onVote: (event: ClubEvent) => void
}

export const VoteButton = ({ event, onVote }: VoteButtonProps) => {
  const [isPopping, setIsPopping] = useState(false)

  const handleVote = () => {
    setIsPopping(true)
    window.setTimeout(() => setIsPopping(false), 340)
    onVote(event)
  }

  return (
    <Button
      variant="contained"
      size="small"
      onClick={handleVote}
      className={`min-h-[44px] retro-vote-button ${isPopping ? 'retro-vote-pop' : ''}`}
    >
      👍 {event.votes}
    </Button>
  )
}
