function trust($sce) {
  'ngInject';

  return (value, type) => {
    // Defaults to treating trusted text as `html`
    return $sce.trustAs(type || 'html', value);
  };
};

export default trust;