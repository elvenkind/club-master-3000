import Container from '@mui/material/Container'
import type { PropsWithChildren } from 'react'

export const PageContainer = ({ children }: PropsWithChildren) => {
  return (
    <Container maxWidth="lg" className="py-8">
      {children}
    </Container>
  )
}
