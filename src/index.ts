import { PORT, TUNNEL_SUBDOMAIN } from './config';
import { logger } from '@leanylabs/logger';
import { createTunnel } from './tunnel';

export async function startTunnel() {
  if (!TUNNEL_SUBDOMAIN) {
    logger.warn('Require enviroment variable TUNNEL_SUBDOMAIN');
  }

  if (!PORT) {
    logger.warn('Require enviroment variable PORT');
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
