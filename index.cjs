(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('decorate', factory) :
	(global.decorate = factory());
}(this, (function () {

	return function decorate(Class, key, decorator) {
		if (decorator === undefined) {
			decorator = key
			decorator(Class)
		} else {
			let proto = Class.prototype
			let descriptor = Object.getOwnPropertyDescriptor(proto, key) || {}
			decorator(proto, key, descriptor)
		}
	}

})));