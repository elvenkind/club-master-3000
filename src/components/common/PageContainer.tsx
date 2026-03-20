import Container from '@mui/material/Container'
import type { PropsWithChildren } from 'react'

export const PageContainer = ({ children }: PropsWithChildren) => {
  return (
    <Container maxWidth="lg" className="py-4 px-4 sm:py-8 sm:px-6">
      {children}
    </Container>
  )
}
