import { createFileRoute } from '@tanstack/react-router'
import Contact from '../components/Contact'

export const Route = createFileRoute('/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Contact />
}