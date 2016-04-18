// our counter app

// model
const counterModel = Object.create(Model)
counterModel.set({
  count: 0,
})

// view
const counterView = {
  renderTo: 'body',
  template: ({ count = '' } = {}) => `
    <button id="addBtn"> Add </button>
    <h1> ${count} </h1>
  `,
}
Object.setPrototypeOf(counterView, View)

// ctrl
const CounterCtrl = {
  model: counterModel,
  view: counterView,
  events: {
    '#addBtn': {
      click () {
        this.model.set({
          count: this.model.get('count') + 1,
        })
      },
    },
  },
}
Object.setPrototypeOf(CounterCtrl, Controller)

CounterCtrl.init()
