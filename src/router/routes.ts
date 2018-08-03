import { createRoute, createLayout } from '@/helpers/importer'

const route = createRoute()
const layout = createLayout()

const baseChildren = [
  route('/', 'Home'),
  route('about', 'About')
]

const routes = [layout('/', 'base', baseChildren)]

export default routes
