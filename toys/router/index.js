// a hash to store our routers
const routes = []

// route registering function
function route (path, controller) {
  routes[path] = {
    controller
  }
}

function router () {
  const el = document.querySelector('#view')
  const url = location.hash.slice(1) || '/'
  const route = routes[url]
  
  el.innerHTML = route.controller()  
}

window.addEventListener('hashchange', router)
window.addEventListener('DOMContentLoaded', router)

route('/', () => '<h1> Home </h1>')
route('/page1', () => '<h1> Page1 </h1>')
route('/page2', () => '<h1> Page2 </h1>')