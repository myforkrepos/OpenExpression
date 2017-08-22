"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Token2 = require("./Token");

var _Token3 = _interopRequireDefault(_Token2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TokenABOperator = function (_Token) {
	_inherits(TokenABOperator, _Token);

	function TokenABOperator(pattern, precedence, operator) {
		_classCallCheck(this, TokenABOperator);

		var _this = _possibleConstructorReturn(this, (TokenABOperator.__proto__ || Object.getPrototypeOf(TokenABOperator)).call(this, pattern, precedence));

		if (_this.constructor == TokenABOperator) throw new Error("cannot instantiate abstract TokenABOperator class");

		_this._operator = operator;
		return _this;
	}

	_createClass(TokenABOperator, [{
		key: "operate",
		value: function operate(token, stack) {
			var b = stack.pop();
			var a = stack.pop();
			stack.push(this._operator(a, b));
		}
	}]);

	return TokenABOperator;
}(_Token3.default);

exports.default = TokenABOperator;