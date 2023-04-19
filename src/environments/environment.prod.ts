import { env } from './.env';

export const environment = {
  production: true,
  apiUrl: 'https://api.nxie.uk/v1',
  version: env['npm_package_version'],
  serverUrl: 'https://api.nxie.uk/v1',
  defaultLanguage: 'en-US',
  supportedLanguages: ['de-DE', 'en-US', 'es-ES', 'fr-FR', 'it-IT'],
};
