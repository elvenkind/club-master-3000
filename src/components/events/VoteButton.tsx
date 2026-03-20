import Button from '@mui/material/Button'
import type { ClubEvent } from '../../types/event'

interface VoteButtonProps {
  event: ClubEvent
  onVote: (event: ClubEvent) => void
}

export const VoteButton = ({ event, onVote }: VoteButtonProps) => {
  return (
    <Button
      variant="outlined"
      size="small"
      onClick={() => onVote(event)}
      className="min-w-[44px] min-h-[44px]"
    >
      👍 {event.votes}
    </Button>
  )
}
