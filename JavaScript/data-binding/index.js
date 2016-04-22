function bindModelInput (obj, property, domElement) {
  Object.defineProperty(obj, property, {
    get: () => domElement.value,
    set: newValue => {
      domElement.value = newValue
    },
    configurable: true,
  })
}

let human = {
  life: 42,
}

bindModelInput(human, 'life', document.querySelector('input'))
