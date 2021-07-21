import { getRandomSubdomain } from './services/random-subdomain';
import { logger } from '@leanylabs/logger';

const getSubdomain = () => {
  const { TUNNEL_SUBDOMAIN } = process.env;

  if (!TUNNEL_SUBDOMAIN) {
    logger.warn('TUNNEL_SUBDOMAIN is missed, using a random subdomain');
    return getRandomSubdomain();
  }

  return TUNNEL_SUBDOMAIN;
};

const getPort = () => {
  const { PORT } = process.env;

  if (!PORT) {
    logger.warn('PORT is missed, using default 8080 port');
    return '8080';
  }

  return PORT;
};

require('dotenv').config();
export const TUNNEL_SUBDOMAIN = getSubdomain();
export const PORT = getPort();
