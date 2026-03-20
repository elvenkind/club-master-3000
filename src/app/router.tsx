import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './AppLayout'
import { CalendarPage } from '../pages/CalendarPage'
import { EventsPage } from '../pages/EventsPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <EventsPage /> },
      { path: 'calendar', element: <CalendarPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
