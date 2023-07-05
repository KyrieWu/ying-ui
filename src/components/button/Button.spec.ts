import YButton from './Button.vue'
import { mount } from '@vue/test-utils'
describe('按钮测试', () => {
  it('显示文本', () => {
    const content = '大圣小老弟'
    const wrapper = mount(YButton, {
      slots: {
        default: content
      }
    })
    expect(wrapper.text()).toBe(content)
  })

  it('通过size属性控制大小', () => {
    const size = 'small'
    const wrapper = mount(YButton, {
      props: {
        size
      }
    })
    // size内部通过class控制
    expect(wrapper.classes()).toContain(`el-YButton--${size}`)
  })
  it('全局设置按钮默认大小', () => {
    const size = 'mini'
    const wrapper = mount(YButton, {
      global: {
        config: {
          globalProperties: {
            $AILEMENTE: {
              size
            }
          }
        }
      }
    })

    expect(wrapper.classes()).toContain(`el-YButton--${size}`)
  })

  it('按钮主题 ', () => {
    const type = 'success'
    const wrapper = mount(YButton, {
      props: {
        type
      }
    })
    expect(wrapper.classes()).toContain(`el-YButton--${type}`)
  })

})