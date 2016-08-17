export default class Phrases {
  constructor(AppConstants, $http, $q, $localStorage) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;

    this._storage = $localStorage;
  }

  get() {
    let deferred = this._$q.defer();
    let storage = this._storage;

    this._$http({
      url: this._AppConstants.pharsesData,
      method: 'GET',
      transformResponse: (data) => {
        data = JSON.parse(data);
        let output = [];
        if (!angular.isArray(data)) {
          for (let key in data) {
            // add empty string notes
            if (!('notes' in data[key])) {
              // restore notes from localstorage
              data[key]['notes'] = storage.notes[data[key]['id']] || '';
            }
            if (!('selected' in data[key])) {
              data[key]['selected'] = false;
            }
            output.push(data[key]);
          }
        }
        return output;
      }
    }).then(
      (res) => deferred.resolve(res.data),
      (err) => deferred.reject(err)
    );

    return deferred.promise;
  }


}