let registrationApi = (Restangular, ApiBase) => {
  return new class RegistrationApi extends ApiBase {

    create(data) {
      return Restangular
        .post('sessions', { costumer: angular.extend(data, { company_id: this.company.id }) });
    }

    update(data) {
      return Restangular
        .one('sessions')
        .patch({ costumer: data });
    }
  }
};

angular.module('foodbox.store.api').factory('registrationApi', registrationApi);
