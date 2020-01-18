# Decorate

🧪 Use decorators without the syntax & transpilers.

Want to write modern code utilizing decorators but don't want to throw in heavy transpiler just to get `@decorator` syntax to work? Use `decorate()`.

## Why?

It is the future now. We can already use classes, fat arrow functions, ES modules & imports, even instance properties. So there's no need to use transpilers anymore. Except for decorators. The extremely useful feature that spent an eternity in the standardization process and is still not yet done. And won't be until like 2029.

## API

* `decorate(Class, decorator)`
* `decorate(Class, decorator('with-argument'))`
* `decorate(Class, 'methodName', decorator)`
* `decorate(Class, 'methodName', decorator({with: 'argument'}))`

for example:

```js
decorate(MyClass, someClassDecorator)
decorate(MyClass, customElement('my-element'))
decorate(MyClass, 'boundMethod', autobind)
decorate(MyClass, 'hiddenValue', nonenumerable)
decorate(MyClass, 'frozenValue', configurable(false))
```

## Installation

install npm package

```
npm install decorate
```

import the `decorate()` function

```js
// Node.js
import decorate from 'decorate'
```

```html
<!-- newer browsers -->
<script type="module">
import decorate from './node_modules/decorate/index.js'
</script>
```

```html
<!-- older browsers -->
<script src="./node_modules/decorate/index.cjs"></script>
```

## Example

you can do this:

```js
import decorate from 'decorate'
import {inlineView, bindable, computedFrom} from 'aurelia-framework'

class MyElement {

	get fullName() {
		return this.firstName + ' ' + this.lastName
	}

}

decorate(MyElement, customElement('my-element'))
decorate(MyElement, inlineView('<template>fullName: ${fullName}</template>'))
decorate(MyElement, 'firstName', bindable)
decorate(MyElement, 'lastName', bindable({defaultBindingMode: au.bindingMode.twoWay}))
decorate(MyElement, 'fullName', computedFrom('firstName', 'lastName'))
```

instead of this:

```js
import {customElement, inlineView, bindable, computedFrom} from 'aurelia-framework'

@customElement('my-element')
@inlineView('<template>fullName: ${fullName}</template>')
class MyElement {

	@bindable
	firstName

	@bindable({defaultBindingMode: au.bindingMode.twoWay})
	lastName

	@computedFrom('firstName', 'lastName')
	get fullName() {
		return this.firstName + ' ' + this.lastName
	}

}
```
