import { createFileRoute } from '@tanstack/react-router'
import Foods from '../components/Food'

export const Route = createFileRoute('/foods')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Foods />
}
