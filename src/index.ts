import { PORT, TUNNEL_SUBDOMAIN } from './config';
import { logger } from './logger';
import { createTunnel } from './tunnel';

async function start() {
  try {
    logger.info('Creating tunnel', { TUNNEL_SUBDOMAIN: TUNNEL_SUBDOMAIN, PORT: PORT });
    const closeTunnel = await createTunnel(Number.parseInt(PORT), () => {
      process.exit();
    });
    process.on('beforeExit', () => closeTunnel());
  } catch (err) {
    logger.error('Failed to start tunnel', { err });
  }
}

start();
