import { createApp } from 'vue'
import App from './App.vue'
import YContainer from './components/container'
import YButton from './components/button'

const app= createApp(App)
app.config.globalProperties.$AILEMENTE = {
    size:'large'
  }
app.use(YContainer).use(YButton)

app.mount('#app')
