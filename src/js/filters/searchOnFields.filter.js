function searchOnFields() {
  'ngInject';

  return (items, searchFields, searchKeyword) => {
    return _.reduce(
      items,
      (result, item) => {
        let found = false;
        angular.forEach(
          searchFields,
          (field) => {
            if (item[field] != undefined && (angular.lowercase(item[field]) + '').indexOf(angular.lowercase(searchKeyword || '')) !== -1) {
              if (!found) {
                result.push(item);
                found = true;
              }
            }
          }
        );
        return result;
      },
      []
    );
  };
};

export default searchOnFields;