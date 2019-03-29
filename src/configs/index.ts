import { production } from './production'
import { development } from './development'

export const configs = process.env.NODE_ENV === 'production' ? production : development
