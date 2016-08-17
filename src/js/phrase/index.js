import angular from 'angular';

// Create the module where our functionality can attach to
let phraseModule = angular.module('app.phrase', []);

// Include our UI-Router config settings
import PhraseConfig from './phrase.config';
phraseModule.config(PhraseConfig);

// Controllers
import PhraseCtrl from './phrase.controller';
phraseModule.controller('PhraseCtrl', PhraseCtrl);

export default phraseModule;