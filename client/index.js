import Vue from 'vue'
import { createRouter } from './router'
import application from './application'

function createApp() {
  // create store and router instances
  
  const router = createRouter()

  const app = new Vue({
    router,
    render: h => h(application)
  })

  return { app, router }
}

const { app } = createApp()

document.head.removeChild(document.querySelector('#splash-spinner'))
document.body.removeChild(document.querySelector('.spinner'))

app.$mount('#application')
