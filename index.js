export default function decorate(Class, key, decorator) {
	if (decorator === undefined) {
		decorator = key
		decorator(Class)
	} else {
		let proto = Class.prototype
		let descriptor = Object.getOwnPropertyDescriptor(proto, key) || {}
		decorator(proto, key, descriptor)
	}
}