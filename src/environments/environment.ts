// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  serviceBaseUrl: 'http://localhost:8080',
  fb: {
    appId: 1234300769950799,
    cookie: true,
    xfbml: true,
    version: 'v2.8'
  },
  auth: {
    loginUrl: 'http://localhost:8080/oauth/token',
    registrationUrl: 'http://localhost:8080/user/register',
    clientId: 'changeWeb',
    clientSecret: 'changewebsecret'
  },
  redirectUri: 'http://localhost:4200/oauth/provider-callback'
};
