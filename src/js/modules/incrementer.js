// modules/incrementer.js
export default class Incrementer {
  constructor(el) {
    this.el = el
    this.setVars()
    this.bindEvents()
  }

  setVars() {
    this.counter = this.el.querySelector('[data-target]')
    this.button = this.el.querySelector('[data-trigger]')
  }

  bindEvents() {
    this.button.addEventListener('click', this.add)
  }

  cleanUp() {
    this.button.removeEventListener('click', this.add)
    this.counter.innerHTML = 0;
  }

  add = () => {
    const content = this.counter.innerHTML

    this.counter.innerHTML = parseInt(content) + 1
  }
}
