
function PhraseConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.phrase', {
    url: '/',
    controller: 'PhraseCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'phrase/phrase.html',
    resolve: {
      phrases: function(Phrases, $state, $stateParams) {
        return Phrases.get().then(
          (phrases) => phrases,
          (err) => console.log('Errors wheen loading phrases!', err)
        );
      }
    }
  });

};

export default PhraseConfig;