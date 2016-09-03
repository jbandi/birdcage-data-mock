'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var initialTweets = [{
    title: 'Use React & Redux',
    completed: false,
    id: 0
}, {
    title: 'Use Electron',
    completed: false,
    id: 0
}];

var BirdcageRepository = function () {
    function BirdcageRepository() {
        _classCallCheck(this, BirdcageRepository);
    }

    _createClass(BirdcageRepository, [{
        key: 'getTweets',
        value: function getTweets() {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    return resolve(initialTweets);
                }, 0);
            });
        }
    }]);

    return BirdcageRepository;
}();

exports.default = BirdcageRepository;