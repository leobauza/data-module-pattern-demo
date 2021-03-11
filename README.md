```js
const dataModules = [...document.querySelectorAll('[data-module]')]

const storage = {}

dataModules.forEach((element) => {
  element.dataset.module.split(' ').forEach(function (moduleName) {
    import(
      `./modules/${moduleName}`
    ).then((Module) => {
      storage[moduleName] = new Module.default(element)
    })
  })
})

if (module.hot) {
  module.hot.accept()
  module.hot.dispose(() => {
    dataModules.forEach((element) => {
      element.dataset.module.split(' ').forEach(function (moduleName) {
        storage[moduleName].cleanUp()
      })
    })
  })
}
```

```html
<div data-module="incrementer">
  <div id="counter">0</div>
  <button id="button">Add 1</button>
</div>
```

```js
// modules/incrementer.js
export default class Incrementer {
  constructor(el) {
    this.el = el
    this.setVars()
    this.bindEvents()
  }

  setVars() {
    this.counter = this.el.querySelector('#counter')
    this.button = this.el.querySelector('#button')
  }

  bindEvents() {
    this.button.addEventListener('click', this.add)
  }

  cleanUp() {
    this.button.removeEventListener('click', this.add)
  }

  add = () => {
    const content = this.counter.innerHTML

    this.counter.innerHTML = parseInt(content) + 1
  }
}
```