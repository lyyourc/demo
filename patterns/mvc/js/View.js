const View = {
  renderTo: null,
  template: () => {},

  render (model) {
    document.querySelector(this.renderTo).innerHTML = this.template(model)
    return
  },
}

Object.setPrototypeOf(View, Event)
