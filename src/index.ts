import { PORT, TUNNEL_SUBDOMAIN } from './config';
import { logger } from './logger';
import { createTunnel } from './tunnel';

export async function startTunnel() {
  if (!TUNNEL_SUBDOMAIN) {
    logger.error('Require enviroment variable TUNNEL_SUBDOMAIN');
    return;
  }

  if (!PORT) {
    logger.error('Require enviroment variable PORT');
    return;
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
