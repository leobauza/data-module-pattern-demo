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