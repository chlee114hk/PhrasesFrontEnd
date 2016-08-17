import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);


import PhrasesService from './phrases.service';
servicesModule.service('Phrases', PhrasesService);


export default servicesModule;