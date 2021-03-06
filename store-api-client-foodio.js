'use strict';

angular.module('store.api.client.foodio', ['constants.foodio']);

var bootstrap = function bootstrap(constants, RestangularProvider) {
  RestangularProvider.setBaseUrl(constants.api);
};

angular.module('store.api.client.foodio').config(bootstrap);
bootstrap.$inject = ['constants', 'RestangularProvider'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(AddressApi, _ApiBase);

    function AddressApi() {
      _classCallCheck(this, AddressApi);

      _get(Object.getPrototypeOf(AddressApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(AddressApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return Restangular.one('companies', this.company.id).one('costumers', this.costumer.id).one('addresses').get(params);
      }
    }, {
      key: 'create',
      value: function create(address) {
        return Restangular.one('companies', this.company.id).one('costumers', this.costumer.id).post('addresses', { address: address });
      }
    }, {
      key: 'update',
      value: function update(address) {
        return Restangular.one('companies', this.company.id).one('costumers', this.costumer.id).one('addresses', address.id).patch({ address: address });
      }
    }, {
      key: 'remove',
      value: function remove(address) {
        return Restangular.one('companies', this.company.id).one('costumers', this.costumer.id).one('addresses', address.id).remove();
      }
    }]);

    return AddressApi;
  })(ApiBase))();
};

angular.module('store.api.client.foodio').factory('addressApi', api);
api.$inject = ['Restangular', 'ApiBase'];
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var api = function api($rootScope) {
  return function ApiBase() {
    var _this = this;

    _classCallCheck(this, ApiBase);

    this.company = $rootScope.company;
    this.store = $rootScope.currentStore;
    this.costumer = $rootScope.currentCostumer;

    $rootScope.$watch('currentStore', function (store) {
      if (store) _this.store = store;
    });

    $rootScope.$watch('company', function (company) {
      if (company) _this.company = company;
    });

    $rootScope.$watch('currentCostumer', function (costumer) {
      if (costumer) _this.costumer = costumer;
    });
  };
};

angular.module('store.api.client.foodio').factory('ApiBase', api);
api.$inject = ['$rootScope'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(CartApi, _ApiBase);

    function CartApi() {
      _classCallCheck(this, CartApi);

      _get(Object.getPrototypeOf(CartApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CartApi, [{
      key: 'fetch',
      value: function fetch() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('carts').get(params);
      }
    }, {
      key: 'new',
      value: function _new() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('carts').one('new').get();
      }
    }]);

    return CartApi;
  })(ApiBase))();
};

angular.module('store.api.client.foodio').factory('cartApi', api);
api.$inject = ['Restangular', 'ApiBase'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase, $q) {
  return new ((function (_ApiBase) {
    _inherits(CartItemApi, _ApiBase);

    function CartItemApi() {
      _classCallCheck(this, CartItemApi);

      _get(Object.getPrototypeOf(CartItemApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CartItemApi, [{
      key: 'create',
      value: function create(cart, cartItem) {
        var _this = this;

        return this._serialize(cartItem).then(function (serializedCartItem) {
          return Restangular.one('companies', _this.company.id).one('stores', _this.store.id).one('carts').post('cart_items?token=' + cart.token, { cart_item: serializedCartItem });
        });
      }
    }, {
      key: 'update',
      value: function update(cart, cartItem) {
        var _this2 = this;

        return this._serialize(cartItem).then(function (serializedCartItem) {
          var params = { token: cart.token };

          return Restangular.one('companies', _this2.company.id).one('stores', _this2.store.id).one('carts').one('cart_items', cartItem.id).patch(angular.extend({ cart_item: serializedCartItem }, params));
        });
      }
    }, {
      key: 'destroy',
      value: function destroy(cart, cartItem) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('carts').one('cart_items', cartItem.id).remove({ token: cart.token });
      }
    }, {
      key: 'clubable',
      value: function clubable(cart, cartItem) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('carts').one('cart_items', cartItem.id).post('clubable?token=' + cart.token);
      }
    }, {
      key: '_serialize',
      value: function _serialize(cartItem) {
        return new Promise(function (resolve, reject) {
          var toPut = [];

          for (var i in cartItem.cart_item_addons) {
            var a = cartItem.cart_item_addons[i];

            if (a.id && a.price !== null) {
              toPut.push({ product_addon_id: a.id });
            } else {
              for (var j in a) {
                var addon = a[j];
                if (addon.amount > 0) {
                  toPut.push({
                    product_addon_id: addon.id,
                    amount: addon.amount
                  });
                }
              }
            }
          }

          var data = {
            bonificable: cartItem.bonificable,
            amount: cartItem.amount,
            note: cartItem.note,
            product_id: cartItem.product.id,
            cart_item_addons_to_put_attributes: toPut
          };

          resolve(data);
        });
      }
    }]);

    return CartItemApi;
  })(ApiBase))();
};

angular.module('store.api.client.foodio').factory('cartItemApi', api);
api.$inject = ['Restangular', 'ApiBase', '$q'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(ChatApi, _ApiBase);

    function ChatApi() {
      _classCallCheck(this, ChatApi);

      _get(Object.getPrototypeOf(ChatApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ChatApi, [{
      key: 'show',
      value: function show(chat, params) {
        return Restangular.one('companies', this.company.id).one('costumers', this.costumer.id).one('chats', chat.id).get(params);
      }
    }]);

    return ChatApi;
  })(ApiBase))();
};

api.$inject = ['Restangular', 'ApiBase'];
angular.module('store.api.client.foodio').factory('chatApi', api);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(chatMessageApi, _ApiBase);

    function chatMessageApi() {
      _classCallCheck(this, chatMessageApi);

      _get(Object.getPrototypeOf(chatMessageApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(chatMessageApi, [{
      key: 'create',
      value: function create(chat, chatMessage) {
        return Restangular.one('companies', this.company.id).one('costumers', this.costumer.id).one('chats', chat.id).post('chat_messages', { chat_message: chatMessage });
      }
    }]);

    return chatMessageApi;
  })(ApiBase))();
};

api.$inject = ['Restangular', 'ApiBase'];
angular.module('store.api.client.foodio').factory('chatMessageApi', api);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(clubActionApi, _ApiBase);

    function clubActionApi() {
      _classCallCheck(this, clubActionApi);

      _get(Object.getPrototypeOf(clubActionApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(clubActionApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return Restangular.one('companies', this.company.id).one('costumers', this.costumer.id).one('club_actions').get(params);
      }
    }]);

    return clubActionApi;
  })(ApiBase))();
};

api.$inject = ['Restangular', 'ApiBase'];
angular.module('store.api.client.foodio').factory('clubActionApi', api);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var api = function api(Restangular) {

  return new ((function () {
    function CompanyApi() {
      _classCallCheck(this, CompanyApi);
    }

    _createClass(CompanyApi, [{
      key: 'fetchBySubdomain',
      value: function fetchBySubdomain(company) {
        return Restangular.one('companies', company.subdomain).get();
      }
    }]);

    return CompanyApi;
  })())();
};

angular.module('store.api.client.foodio').factory('companyApi', api);
api.$inject = ['Restangular'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var api = function api(Restangular, ApiBase) {
  return new ((function () {
    function ConfirmationApi() {
      _classCallCheck(this, ConfirmationApi);
    }

    _createClass(ConfirmationApi, [{
      key: 'fetch',
      value: function fetch(data) {
        return Restangular.one('sessions').one('confirmation').get(data);
      }
    }, {
      key: 'create',
      value: function create(data) {
        return Restangular.one('sessions').post('confirmation', { costumer: data });
      }
    }]);

    return ConfirmationApi;
  })())();
};

angular.module('store.api.client.foodio').factory('confirmationApi', api);
api.$inject = ['Restangular', 'ApiBase'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(contactApi, _ApiBase);

    function contactApi() {
      _classCallCheck(this, contactApi);

      _get(Object.getPrototypeOf(contactApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(contactApi, [{
      key: 'create',
      value: function create(contact) {
        return Restangular.one('companies', this.company.id).post('contact', { contact: contact });
      }
    }]);

    return contactApi;
  })(ApiBase))();
};

api.$inject = ['Restangular', 'ApiBase'];
angular.module('store.api.client.foodio').factory('contactApi', api);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(CostumerApi, _ApiBase);

    function CostumerApi() {
      _classCallCheck(this, CostumerApi);

      _get(Object.getPrototypeOf(CostumerApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CostumerApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('costumers', this.costumer.id).get();
      }
    }, {
      key: 'update',
      value: function update(data) {
        return Restangular.one('companies', this.company.id).one('costumers', this.costumer.id).patch({ costumer: data });
      }
    }]);

    return CostumerApi;
  })(ApiBase))();
};

angular.module('store.api.client.foodio').factory('costumerApi', api);
api.$inject = ['Restangular', 'ApiBase'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(CouponApi, _ApiBase);

    function CouponApi() {
      _classCallCheck(this, CouponApi);

      _get(Object.getPrototypeOf(CouponApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CouponApi, [{
      key: 'fetch',
      value: function fetch() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('coupons').get(params);
      }
    }]);

    return CouponApi;
  })(ApiBase))();
};

angular.module('store.api.client.foodio').factory('couponApi', api);
api.$inject = ['Restangular', 'ApiBase'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(CreditCardApi, _ApiBase);

    function CreditCardApi() {
      _classCallCheck(this, CreditCardApi);

      _get(Object.getPrototypeOf(CreditCardApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CreditCardApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return Restangular.one('companies', this.company.id).one('costumers', this.costumer.id).one('credit_cards').get(params);
      }
    }, {
      key: 'create',
      value: function create(card) {
        if (card.number && card.number.length > 12) {
          card.last_four_digits = card.number.slice(-4);
        }

        card.number = null;
        card.expiry = null;
        card.cvc = null;

        return Restangular.one('companies', this.company.id).one('costumers', this.costumer.id).post('credit_cards', { credit_card: card });
      }
    }, {
      key: 'update',
      value: function update(card) {
        return Restangular.one('companies', this.company.id).one('costumers', this.costumer.id).one('credit_cards', card.id).patch({ credit_card: card });
      }
    }, {
      key: 'remove',
      value: function remove(card) {
        return Restangular.one('companies', this.company.id).one('costumers', this.costumer.id).one('credit_cards', card.id).remove();
      }
    }]);

    return CreditCardApi;
  })(ApiBase))();
};

angular.module('store.api.client.foodio').factory('creditCardApi', api);
api.$inject = ['Restangular', 'ApiBase'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var api = function api(Restangular, $q, $interval, $window, popup, constants) {
  return new ((function () {
    function LoginApi() {
      _classCallCheck(this, LoginApi);
    }

    _createClass(LoginApi, [{
      key: 'loginWithEmail',
      value: function loginWithEmail(data) {
        return Restangular.one('sessions').post('sign_in', { costumer: data });
      }
    }, {
      key: 'loginWithFacebook',
      value: function loginWithFacebook(company) {
        return $q(function (resolve, reject) {
          return popup.open(constants.api + '/sessions/auth/facebook?company_id=' + company.id, 600, 600).then(function (popup) {
            var fetchInterval = $interval(function () {
              popup.postMessage('fetch', constants.api);
            }, 1000);

            $window.addEventListener('message', function (e) {
              $interval.cancel(fetchInterval);

              if (e.origin != constants.api) {
                return false;
              }

              popup.close();
              resolve({ data: e.data }, { provider: 'Facebook' });
            }, false);
          });
        });
      }
    }]);

    return LoginApi;
  })())();
};

angular.module('store.api.client.foodio').factory('loginApi', api);
api.$inject = ['Restangular', '$q', '$interval', '$window', 'popup', 'constants'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(MenuApi, _ApiBase);

    function MenuApi() {
      _classCallCheck(this, MenuApi);

      _get(Object.getPrototypeOf(MenuApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(MenuApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('menu').get();
      }
    }, {
      key: 'show',
      value: function show(product) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('menu', product.id).get();
      }
    }]);

    return MenuApi;
  })(ApiBase))();
};

angular.module('store.api.client.foodio').factory('menuApi', api);
api.$inject = ['Restangular', 'ApiBase'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(StoreApi, _ApiBase);

    function StoreApi() {
      _classCallCheck(this, StoreApi);

      _get(Object.getPrototypeOf(StoreApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(StoreApi, [{
      key: 'show',
      value: function show(data) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('messages', data.page).get();
      }
    }]);

    return StoreApi;
  })(ApiBase))();
};

angular.module('store.api.client.foodio').factory('messageApi', api);
api.$inject = ['Restangular', 'ApiBase'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api($q, Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(OrderApi, _ApiBase);

    function OrderApi() {
      _classCallCheck(this, OrderApi);

      _get(Object.getPrototypeOf(OrderApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(OrderApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return Restangular.one('companies', this.company.id).one('costumers', this.costumer.id).one('orders').get(params);
      }
    }, {
      key: 'show',
      value: function show(order) {
        return Restangular.one('companies', this.company.id).one('costumers', this.costumer.id).one('orders', order.public_number).get();
      }
    }, {
      key: 'create',
      value: function create(order) {
        var _this = this;

        return this._serializeBeforeCreate(order).then(function (serializedOrder) {
          return Restangular.one('companies', _this.company.id).one('costumers', _this.costumer.id).post('orders', { order: serializedOrder });
        });
      }
    }, {
      key: '_serializeBeforeCreate',
      value: function _serializeBeforeCreate(order) {
        return $q(function (resolve) {
          var data = {
            store_id: order.store.id,
            cart_id: order.cart.id,
            note: order.note || null,
            change: order.change || null,
            payment_method_id: order.payment_method.id,
            address_id: order.address ? order.address.id : null,
            order_type_id: order.order_type.id
          };

          // Cupom de desconto
          if (order.coupon && order.coupon.code) {
            data.order_coupon_attributes = {
              code: order.coupon.code
            };
          }

          if (order.scheduling) {
            if (order.scheduling.day && order.scheduling.time) {
              data.scheduling_for = {
                wday: order.scheduling.day.wday,
                from: order.scheduling.day.date + ' ' + order.scheduling.time.opening,
                to: order.scheduling.day.date + ' ' + order.scheduling.time.closing
              };
            }
          }
          return resolve(data);
        });
      }
    }]);

    return OrderApi;
  })(ApiBase))();
};

angular.module('store.api.client.foodio').factory('orderApi', api);
api.$inject = ['$q', 'Restangular', 'ApiBase'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {

  return new ((function (_ApiBase) {
    _inherits(PageApi, _ApiBase);

    function PageApi() {
      _classCallCheck(this, PageApi);

      _get(Object.getPrototypeOf(PageApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(PageApi, [{
      key: 'show',
      value: function show(page) {
        return Restangular.one('companies', this.company.id).one('pages', page.id).get();
      }
    }]);

    return PageApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('store.api.client.foodio').factory('pageApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var service = function service(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(PagseguroApi, _ApiBase);

    function PagseguroApi() {
      _classCallCheck(this, PagseguroApi);

      _get(Object.getPrototypeOf(PagseguroApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(PagseguroApi, [{
      key: 'createSession',
      value: function createSession() {
        return Restangular.one('pagseguro').get();
      }
    }, {
      key: 'pay',
      value: function pay(cart) {
        return Restangular.one('pagseguro').post('addresses', { address: address });
      }
    }]);

    return PagseguroApi;
  })(ApiBase))();
};

service.$inject = ['Restangular', 'ApiBase'];
angular.module('store.api.client.foodio').factory('pagseguroApi', service);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var api = function api(Restangular) {
  return new ((function () {
    function PasswordApi() {
      _classCallCheck(this, PasswordApi);
    }

    _createClass(PasswordApi, [{
      key: 'create',
      value: function create(data) {
        return Restangular.one('sessions').post('password', { costumer: data });
      }
    }, {
      key: 'update',
      value: function update(data) {
        return Restangular.one('sessions').one('password').patch({ costumer: data });
      }
    }]);

    return PasswordApi;
  })())();
};

angular.module('store.api.client.foodio').factory('passwordApi', api);
api.$inject = ['Restangular'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase, $q) {
  return new ((function (_ApiBase) {
    _inherits(RatingApi, _ApiBase);

    function RatingApi() {
      _classCallCheck(this, RatingApi);

      _get(Object.getPrototypeOf(RatingApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(RatingApi, [{
      key: 'update',
      value: function update(order) {
        return Restangular.one('companies', this.company.id).one('costumers', this.costumer.id).one('orders', order.public_number).one('ratings', order.rating.id).patch({ rating: order.rating });
      }
    }, {
      key: 'create',
      value: function create(order) {
        var _this = this;

        return this._serializeBeforeCreate(order).then(function (rating) {
          return Restangular.one('companies', _this.company.id).one('costumers', _this.costumer.id).one('orders', order.public_number).post('ratings', { rating: rating });
        });
      }
    }, {
      key: '_serializeBeforeCreate',
      value: function _serializeBeforeCreate(order) {
        return $q(function (resolve, reject) {
          var rating = {
            delivery: order.rating.delivery,
            score: order.rating.score,
            quality: order.rating.quality,
            correct: order.rating.correct,
            good_comment: order.rating.goodComment,
            bad_comment: order.rating.badComment
          };

          return resolve(rating);
        });
      }
    }]);

    return RatingApi;
  })(ApiBase))();
};

angular.module('store.api.client.foodio').factory('ratingApi', api);
api.$inject = ['Restangular', 'ApiBase', '$q'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(RegistrationApi, _ApiBase);

    function RegistrationApi() {
      _classCallCheck(this, RegistrationApi);

      _get(Object.getPrototypeOf(RegistrationApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(RegistrationApi, [{
      key: 'create',
      value: function create(data) {
        return Restangular.service('sessions').post({ costumer: angular.extend(data, { company_id: this.company.id }) });
      }
    }, {
      key: 'update',
      value: function update(data) {
        return Restangular.service('sessions').patch({ costumer: data });
      }
    }]);

    return RegistrationApi;
  })(ApiBase))();
};

angular.module('store.api.client.foodio').factory('registrationApi', api);
api.$inject = ['Restangular', 'ApiBase'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(SchedulingApi, _ApiBase);

    function SchedulingApi() {
      _classCallCheck(this, SchedulingApi);

      _get(Object.getPrototypeOf(SchedulingApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(SchedulingApi, [{
      key: 'fetch',
      value: function fetch() {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('scheduling').get();
      }
    }]);

    return SchedulingApi;
  })(ApiBase))();
};

angular.module('store.api.client.foodio').factory('schedulingApi', api);
api.$inject = ['Restangular', 'ApiBase'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(StoreApi, _ApiBase);

    function StoreApi() {
      _classCallCheck(this, StoreApi);

      _get(Object.getPrototypeOf(StoreApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(StoreApi, [{
      key: 'fetch',
      value: function fetch() {
        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        return Restangular.one('companies', this.company.id).one('stores').get(params);
      }
    }, {
      key: 'show',
      value: function show(params) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).get(params);
      }
    }]);

    return StoreApi;
  })(ApiBase))();
};

angular.module('store.api.client.foodio').factory('storeApi', api);
api.$inject = ['Restangular', 'ApiBase'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var api = function api(Restangular, ApiBase) {
  return new ((function (_ApiBase) {
    _inherits(storeProductApi, _ApiBase);

    function storeProductApi() {
      _classCallCheck(this, storeProductApi);

      _get(Object.getPrototypeOf(storeProductApi.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(storeProductApi, [{
      key: 'show',
      value: function show(storeProduct) {
        return Restangular.one('companies', this.company.id).one('stores', this.store.id).one('store_products', storeProduct.id).get();
      }
    }]);

    return storeProductApi;
  })(ApiBase))();
};

angular.module('store.api.client.foodio').factory('storeProductApi', api);
api.$inject = ['Restangular', 'ApiBase'];
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var api = function api(Restangular) {
  return new ((function () {
    function ZipcodeApi() {
      _classCallCheck(this, ZipcodeApi);
    }

    _createClass(ZipcodeApi, [{
      key: 'fetch',
      value: function fetch(params) {
        return Restangular.one('zipcode').get(params);
      }
    }]);

    return ZipcodeApi;
  })())();
};

angular.module('store.api.client.foodio').factory('zipcodeApi', api);
api.$inject = ['Restangular'];