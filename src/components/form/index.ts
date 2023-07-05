import {App} from 'vue'
import YForm from './Form.vue'
import YFormItem from './FormItem.vue'
import YInput from './Input.vue'

export default {
  install(app:App){
    app.component(YForm.name,YForm)
    app.component(YFormItem.name,YFormItem)
    app.component(YInput.name,YInput)
  }
}