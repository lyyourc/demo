const Controller = {
  model: null,
  view: null,
  events: {},

  init () {
    this.view.render(this.model.toJSON())

    this.view.on(this.model.id, () => {
      this.view.render(this.model.toJSON())
      this.init()
    })

    Object.keys(this.events).forEach(selector => {
      const el = document.querySelector(selector)
      Object.keys(this.events[selector]).forEach(eventName => {
        el.addEventListener(eventName, this.events[selector][eventName].bind(this), false)
      })
    })
  },
}
