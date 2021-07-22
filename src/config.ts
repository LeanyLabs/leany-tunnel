import { getRandomSubdomain } from './services/random-subdomain';
import { logger } from '@leanylabs/logger';
const { hideBin } = require('yargs/helpers');
const yargs = require('yargs');
const argv = yargs(hideBin(process.argv)).argv;

const getSubdomain = () => {
  const { TUNNEL_SUBDOMAIN } = process.env;

  if (TUNNEL_SUBDOMAIN) {
    return TUNNEL_SUBDOMAIN;
  }

  logger.warn('TUNNEL_SUBDOMAIN is missed, using a random subdomain');
  return getRandomSubdomain();
};

const getPort = () => {
  const { PORT } = process.env;

  if (PORT) {
    return PORT;
  }

  logger.warn('PORT is missed, using default 8080 port');
  return '8080';
};

require('dotenv').config();
export const config = {
  getSubdomain,
  getPort,
};
