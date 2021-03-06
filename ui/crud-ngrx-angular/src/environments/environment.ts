// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

export const api = {
  baseUrl:"http://localhost:3000/",
  routes:{
    getUsers:{endpoints:"api/getUsers" , method:"GET"},
    addUser:{endpoints:"api/addUser" , method:"POST"},
    updateUser:{endpoints:"api/updateUser" , method:"POST"},
    deleteUser:{endpoints:"api/deleteUser/" , method:"POST"}
  }
}
