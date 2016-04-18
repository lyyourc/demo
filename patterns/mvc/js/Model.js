const Model = {
  id: `model-${Math.random() * 10000}`,

  set (attrs) {
    this.attrs = attrs
    this.emit(this.id, this.attrs)
  },

  get (attr) {
    return this.attrs[attr]
  },

  toJSON () {
    return this.attrs
  },
}

Object.setPrototypeOf(Model, Event)
