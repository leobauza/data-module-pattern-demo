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