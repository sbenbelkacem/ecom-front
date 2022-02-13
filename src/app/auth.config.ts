import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'http://192.168.1.12:8074/auth/realms/ecom',
  redirectUri: window.location.origin,
  clientId: 'ecom-client',
  responseType: 'code',
  showDebugInformation: true,
  requireHttps: false
};
