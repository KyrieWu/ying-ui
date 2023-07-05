import { App } from 'vue'
import YButton from './Button.vue'

export default{
    install(app:App){
        app.component(YButton.name,YButton)
    }
}