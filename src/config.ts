import { getRandomSubdomain } from './services/random-subdomain';

require('dotenv').config();
export const TUNNEL_SUBDOMAIN = process.env.TUNNEL_SUBDOMAIN || getRandomSubdomain();
export const PORT = process.env.PORT || '8080';
