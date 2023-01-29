
import { environment as envProd } from './environment.prod';
import { environment as envDev } from './environment.dev';

export const environment = process.env['NODE_ENV'] === 'production' ? envProd : envDev;