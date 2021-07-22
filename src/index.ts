import { config } from './config';
import { logger } from '@leanylabs/logger';
import { createTunnel } from './tunnel';

async function startTunnel() {
  const TUNNEL_SUBDOMAIN = config.getSubdomain();
  const PORT = config.getPort();
  try {
    logger.info('Creating tunnel', { TUNNEL_SUBDOMAIN, PORT });
    const closeTunnel = await createTunnel(Number.parseInt(PORT), TUNNEL_SUBDOMAIN, () => {
      process.exit();
    });
    process.on('beforeExit', () => closeTunnel());
  } catch (err) {
    logger.error('Failed to start tunnel', { err });
  }
}

startTunnel();
