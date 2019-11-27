// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'https://platzi-store.herokuapp.com/products/',
  firebase: {
    apiKey: 'AIzaSyCoRiPbvPIbDiH4xGMh88Rwx22lTNsubBM',
    authDomain: 'platzi-store-f951b.firebaseapp.com',
    databaseURL: 'https://platzi-store-f951b.firebaseio.com',
    projectId: 'platzi-store-f951b',
    storageBucket: 'platzi-store-f951b.appspot.com',
    messagingSenderId: '459933353367',
    appId: '1:459933353367:web:358f7c0824521a05fb70d2',
    measurementId: 'G-R4PD50CF11'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
