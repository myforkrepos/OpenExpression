'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TokenValue2 = require('../TokenValue');

var _TokenValue3 = _interopRequireDefault(_TokenValue2);

var _Precedence = require('../Precedence');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ValueInteger = function (_TokenValue) {
	_inherits(ValueInteger, _TokenValue);

	function ValueInteger() {
		_classCallCheck(this, ValueInteger);

		return _possibleConstructorReturn(this, (ValueInteger.__proto__ || Object.getPrototypeOf(ValueInteger)).call(this, /[0-9]+/, _Precedence.P_VALUE));
	}

	_createClass(ValueInteger, [{
		key: 'shunt',
		value: function shunt(token, stack, output) {
			token.value = parseInt(token.input, 10);
			output.push(token);
		}
	}]);

	return ValueInteger;
}(_TokenValue3.default);

exports.default = ValueInteger;