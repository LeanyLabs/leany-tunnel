import { PORT, TUNNEL_SUBDOMAIN } from './config';
import { logger } from '@leanylabs/logger';
import { createTunnel } from './tunnel';

export async function startTunnel() {
  if (!TUNNEL_SUBDOMAIN) {
    logger.warn('TUNNEL_SUBDOMAIN is missed, using a random subdomain');
  }

  if (!PORT) {
    logger.warn('PORT is missed, using default 8080 port');
  }

  try {
    logger.info('Creating tunnel', { TUNNEL_SUBDOMAIN, PORT });
    const closeTunnel = await createTunnel(Number.parseInt(PORT), () => {
      process.exit();
    });
    process.on('beforeExit', () => closeTunnel());
  } catch (err) {
    logger.error('Failed to start tunnel', { err });
  }
}
