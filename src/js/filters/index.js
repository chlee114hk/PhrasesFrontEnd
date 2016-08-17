import angular from 'angular';

// Create the module where our functionality can attach to
let filterModule = angular.module('app.filters', []);


import trust from './trust.filter';
filterModule.filter('trust', trust);

import searchOnFields from './searchOnFields.filter';
filterModule.filter('searchOnFields', searchOnFields);


export default filterModule;