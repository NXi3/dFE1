import { env } from './.env';

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3021/v1',
  version: env['npm_package_version'] + '-dev',
  serverUrl: 'http://localhost:3021/v1',
  defaultLanguage: 'en-US',
  supportedLanguages: ['de-DE', 'en-US', 'es-ES', 'fr-FR', 'it-IT'],
};
